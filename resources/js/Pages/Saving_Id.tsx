import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import TitleSavings from '@/Components/TitleSavings';
import ConvertPrice from '@/Components/ConvertPrice';
import StatusBar from '@/Components/StatusBarLarge';
import InputButtons from '@/Components/InputButtons';
import FarstView from '@/Ui/FarstViewAvatar';
import CommentLeft from '@/Components/CommentLeft';
import axios from 'axios';

// ファイルのインポート
// import { inputSavingData } from '@/data/Saving';
// import { inputHistoryData } from '@/data/HistoryData';
import { openToggle } from '@/Functions/openToggle';

// 型チェック
import { StatusTypes } from '@/types/tableStatusData'
// import { HistoryTypes } from '@/types/tableHistoryData'
import { SavingTypes } from '@/types/tableSavingData'

interface HistoryTypes {
    history_id: number;
    user_id: number;
    comments_id: number;
    category: number;
    goal_group_id: number;
    amount_saved: number;
    memo_images: string;
    date_saved: string;
    memo: string;
    at_create: string;
};

export default function SavingId() {
    const user = usePage().props.auth.user;

    //ステータスの確認
    const { statuses } = usePage().props as {
        statuses?: StatusTypes[],
    };
    const status = statuses?.[user.id] ?? null;

    // 貯金目標の確認
    const { savings } = usePage().props as {
        savings?: SavingTypes[],
    };
    const savingsArray = savings ? Object.values(savings) : [];
    const saving: SavingTypes = {
        saving_id: Number(savingsArray[0]),
        user_id: Number(savingsArray[1]),
        comment_id: Number(savingsArray[2]),
        goal_group_id: Number(savingsArray[3]),
        goal_name: String(savingsArray[4]),
        goal_amount: Number(savingsArray[5]),
        goal_date: String(savingsArray[6]),
        goal_level: Number(savingsArray[7]),
        goal_images: String(savingsArray[8]),
        is_shared: Boolean(savingsArray[9]),
        memo: String(savingsArray[10]),
    };

    // 履歴の確認
    const { histories } = usePage().props as {
        histories?: HistoryTypes[],
    };

    // const historyData: HistoryTypes[] = inputHistoryData;
    // 情報がない時はすぐ確認できる
    if (!status || !savings || !histories || !saving) {
        return (
            <div>
                <p>ステータスが見つかりません。</p>
            </div>
        );
    }
    console.log("savingsArray:", savingsArray);
    console.log("goal_group_idの型:", typeof saving.goal_group_id);

    // const history = histories.filter((history) => history.user_id === user.id);

    // ユーザー情報の宣言
    const userSaving: number = status.saving;
    const userInvestment: number = status.investment;
    const userEssential: number = status.essential;
    const userExtravagance: number = status.extravagance;
    const userDonation: number = status.donation;

    // データ抽出
    // const goal_group_id = 1;
    // const savingData = savings
    //     .filter((item) => item.goal_group_id === goal_group_id)
    //     .sort((a, b) => a.goal_level - b.goal_level)[0];
    //     console.log("savingData", JSON.stringify(savingData, null, 2));

    // goal_levelが2または3のgoal_group_idを持つデータを抽出
    // const savingDatasLevel2And3 = savings
    //     .filter((item) => item.goal_group_id === goal_group_id && (item.goal_level === 2 || item.goal_level === 3));

    // 積立額の計算
    const calculateTotalSavings = (savingsId: number, history: HistoryTypes[], goalLevel: number): number => {
        if (goalLevel === 1) {
            return history
                .filter((item) => item.goal_group_id === savingsId)
                .reduce((total, item) => total + (item.amount_saved || 0), 0);
        }

        return history
            .filter((item) => item.goal_group_id === savingsId)
            .reduce((total, item) => {
                if (goalLevel === 2) {
                    return (item.amount_saved || 0);
                } else if (goalLevel === 3) {
                    return (item.amount_saved || 0);
                }
                return total;
            }, 0);
    };

    // 必要なstateとuseEffectの配置
    const [currentPrice, setCurrentPrice] = useState<number>(0);
    const [savedPrice, setSavedPrice] = useState<number>(0);

    // 入力値の変更をハンドル
    const handlePriceChange = (newPrice: number) => {
        setCurrentPrice(newPrice); // 入力値を更新
    };
    // 状態管理
    const [statusBarAmount, setStatusBarAmount] = useState<number>(
        calculateTotalSavings(saving.goal_group_id, histories, saving.goal_level)
    );

    const handleSave = (newAmount: number) => {
        const updatedAmount =
            newAmount + calculateTotalSavings(saving.goal_group_id, histories, saving.goal_level);
        setSavedPrice(updatedAmount);
        setStatusBarAmount(updatedAmount);
    };

    const savingsTotal = histories
        .filter((item) => item.category === 1)
        .reduce((total, item) => total + (item.amount_saved || 0), 0);

    const investmentTotal = histories
        .filter((item) => item.category === 2)
        .reduce((total, item) => total + (item.amount_saved || 0), 0);

    const essentialTotal = histories
        .filter((item) => item.category === 3)
        .reduce((total, item) => total + (item.amount_saved || 0), 0);

    const extravaganceTotal = histories
        .filter((item) => item.category === 4)
        .reduce((total, item) => total + (item.amount_saved || 0), 0);

    const donationTotal = histories
        .filter((item) => item.category === 5)
        .reduce((total, item) => total + (item.amount_saved || 0), 0);

    let donationLevel: number = donationTotal;
    if (donationTotal < 1000) {
        donationLevel = 1;
    } else if (donationTotal < 2000) {
        donationLevel = 2;
    } else if (donationTotal < 3000) {
        donationLevel = 3;
    } else if (donationTotal < 4000) {
        donationLevel = 4;
    } else if (donationTotal < 5000) {
        donationLevel = 5;
    }

    const userDataAfter = {
        id: user.id,
        name: user.name,
        savings: userSaving,
        investment: userInvestment,
        essential: userEssential,
        extravagance: userExtravagance,
        planned_extravagance: userDonation,
        level: 0,
        donation: userDonation,
        avatar: "https://borderlesss.sakura.ne.jp/ss1/assets/images/photo-noimages.jpg",
    };
    const userAvatar: string = userDataAfter.avatar;

    // タイトルクリックで開閉を管理するための状態
    const { openIndexes, handleToggle } = openToggle();
    // 時間の修正
    const date = saving.goal_date;
    const formattedDate = date.toString().split('T')[0];

    return (
        <div className='overflow-hidden flex items-center justify-center w-full h-full'>
            <div className='contents_box overflow-auto flex flex-col gap-5 pb-5 w-full md:max-w-[64vmin] h-screen md:border-solid border-0 md:border-8 md:border-black md:rounded-2xl '>
                <FarstView
                    UserData={userDataAfter}
                    category={1}
                    fvImages={userAvatar}
                />

                <div className='flex flex-col gap-5'>
                    <ul className='px-4'>
                        <li>
                            <div>
                                <p className='text-sm font-semibold'>{formattedDate}</p>
                                {saving.goal_level === 1 ? (
                                    <TitleSavings
                                        type={1}
                                        title={saving.goal_name}
                                    />
                                ) : ''}
                                <div className='relative w-full h-auto mt-2'>

                                    <StatusBar
                                        size="large"
                                        total={saving.goal_amount}
                                        amount={statusBarAmount}
                                    />
                                    <p
                                        className='absolute top-1/2 right-2 translate-y-[-50%] z-10 flex items-center justify-center text-primary font-bold mix-blend-difference'>
                                        <ConvertPrice
                                            price={statusBarAmount}
                                        // price={calculateTotalSavings(savings.goal_group_id, historyData, savings.goal_level)}
                                        />/<ConvertPrice
                                            price={saving.goal_amount}
                                        />
                                    </p>
                                </div>

                                {/* コメントの表示 */}
                                {/* {getComments(savingData.comment_id, commentsData).map((comment, index) => (
                            <CommentLeft
                                key={index}
                                className='mt-2'
                                commentsText={comment.comment_text} // コメントテキストを表示
                            />
                        ))} */}
                                <InputButtons
                                    className='mt-5'
                                    onChange={handlePriceChange} // 入力値変更時に実行
                                    onSave={handleSave}
                                />
                            </div>

                            {/* goal_levelが2または3の関連データを表示 */}
                            {/* <div className='flex flex-col gap-5 mt-5'>
                                {savingDatasLevel2And3.length > 0 ? (
                                    savingDatasLevel2And3.map((item, index) => {
                                        const isOpen = openIndexes.has(index);
                                        return (
                                            <div key={index} className="relative w-full h-auto min-h-6 mt-2">
                                                <div
                                                    className='flex justify-start items-center gap-2'
                                                    onClick={() => handleToggle(index)}
                                                    onTouchStart={() => handleToggle(index)}
                                                >
                                                    <TitleSavings
                                                        type={item.goal_level}
                                                        title={item.goal_name}
                                                        className='!justify-start items-start'
                                                    />
                                                    <span className="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                                            <path fill="#666" d="M4.655 3.933a1 1 0 0 1-1.31 0L.831 1.756C.131 1.15.561 0 1.486 0h5.028c.926 0 1.354 1.15.655 1.756z" />
                                                        </svg>
                                                    </span>
                                                </div>

                                                {/* タイトル以外を開閉する */}
                                                {/* {isOpen && ( */}
                                                    {/* <div className="transition-all duration-300"> */}
                                                        {/* <p className='ml-7 mt-1'>{item.memo}</p> */}
                                                        {/* <p className='text-right text-sm font-bold'>
                                                            <ConvertPrice
                                                                price={calculateTotalSavings(item.goal_group_id, historyData, item.goal_level)}
                                                            /> / <ConvertPrice price={item.goal_amount} />
                                                        </p>
                                                        <StatusBar
                                                            size="small"
                                                            total={item.goal_amount}
                                                            amount={statusBarAmount} // 新しく計算した積立金額
                                                        />
                                                        <InputButtons
                                                            className='mt-5'
                                                            onChange={handlePriceChange} // 入力値変更時に実行
                                                            onSave={handleSave}
                                                        /> */}
                                                    {/* </div> */}
                                                {/* )} */}
                                                {/* コメントの表示 */}
                                                {/* {getComments(item.comment_id, commentsData).map((comment, index) => (
                                            <CommentLeft
                                                key={index}  // key を指定することで効率的なレンダリングを促進
                                                className='mt-2'
                                                commentsText={comment.comment_text} // comment_text を渡す
                                            />
                                        ))} */}
                                            {/* </div> */}
                                        {/* ); */}
                                    {/* }) */}
                                {/* ) : ( */}
                                    {/* <p>関連するデータが見つかりませんでした。</p> */}
                                {/* )} */}
                            {/* </div> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

import { useState, useRef } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import TitleSavings from '@/Components/TitleSavings';
import ConvertPrice from '@/Components/ConvertPrice';
import StatusBar from '@/Components/StatusBarLarge';
import InputButtons from '@/Components/InputButtons';
import FarstView from '@/Ui/FarstViewAvatar';
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

    // 情報がない時はすぐ確認できる
    if (!status || !savings || !histories || !saving) {
        return (
            <div>
                <p>ステータスが見つかりません。</p>
            </div>
        );
    }

    // ユーザー情報の宣言
    const userSaving: number = status.saving;
    const userInvestment: number = status.investment;
    const userEssential: number = status.essential;
    const userExtravagance: number = status.extravagance;
    const userDonation: number = status.donation;

    // // 積立額の計算
    // const calculateTotalSavings = (savingsId: number, history: HistoryTypes[], goalLevel: number): number => {
    //     return histories
    //         .map((history) => parseFloat(String(history.amount_saved)))
    //         .reduce((total, amount) => total + amount, 0);
    // };
// 積立額の計算
const calculateTotalSavings = (savingsId: number, histories: HistoryTypes[], goalGroupId: number): number => {
    return histories
        .filter((history) => history.goal_group_id === savingsId) // goal_group_id でフィルタリング
        .map((history) => parseFloat(String(history.amount_saved))) // amount_saved を数値に変換
        .reduce((total, amount) => total + amount, 0); // 合計を計算
};

    // 必要なstateとuseEffectの配置
    const [currentPrice, setCurrentPrice] = useState<number>(0);
    const [savedPrice, setSavedPrice] = useState<number>(0);

    // 入力値の変更をハンドル
    const handlePriceChange = (newPrice: number) => {
        setCurrentPrice(newPrice);
    };

    // 状態管理
    const [statusBarAmount, setStatusBarAmount] = useState<number>(
        calculateTotalSavings(saving.saving_id, histories, saving.goal_level)
    );

    const handleSave = (newAmount: number) => {
        const updatedAmount =
            newAmount + calculateTotalSavings(saving.goal_group_id, histories, saving.goal_level);
        setSavedPrice(updatedAmount);
        setStatusBarAmount(updatedAmount);
    };

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

    //送信関係
    const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
    const csrfToken = useRef<string>(metaCsrfToken.content);

    const today = new Date().toISOString().split('T')[0];

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
                                <form action="./update" method='POST'>
                                    <input type="hidden" name="_token" value={csrfToken.current} />
                                    <input type="hidden" name="user_id" value={user.id} />
                                    <input type="hidden" name="category" value={1} />
                                    <input type="hidden" name="goal_group_id" value={saving.saving_id} />
                                    <input type="hidden" name="date_saved" value={today} />
                                    <input type="hidden" name="saving_id" value={saving.saving_id} />

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
                                            />/<ConvertPrice
                                                price={saving.goal_amount}
                                            />
                                        </p>
                                    </div>

                                    <InputButtons
                                        inputName="amount_saved"
                                        className='mt-5'
                                        onChange={handlePriceChange} // 入力値変更時に実行
                                        onSave={handleSave}
                                    />
                                </form>
                                <Link
                                href='./userpage'
                                className='flex items-center justify-center rounded-md border border-transparent bg-gradation min-w-32 max-w-52 mt-10 mx-auto px-4 py-2 max-h-10 text-sm font-bold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gradation-blue focus:bg-gradation focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:bg-gradation'>
                                ユーザーページ
                            </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

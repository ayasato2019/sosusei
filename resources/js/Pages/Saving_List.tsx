import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import FarstView from '@/Ui/FarstViewAvatar'
import ButtonPrimary from '@/Components/ButtonPrimary';
import TitleSection from '@/Components/TitleSection';
import ListSavings from '@/Components/ListSaving';

import TopSaving from '@/Ui/TopSaving'

// 型チェック
import { UserTypes } from '@/types/tableUserData'
import { StatusTypes } from '@/types/tableStatusData'
import { HistoryTypes } from '@/types/tableHistoryData'
import { SavingTypes } from '@/types/tableSavingData'

export default function Saving_List({
    // savings,
    // history
}: {
        // isFirstAccess: boolean = false,
        // savings: SavingTypes[];
        // history: HistoryTypes[];
    }) {
    // Laravel から渡されたデータを取得
// Laravel から渡されたデータを取得
const { statuses, username: rawUsername, id: rawId } = usePage().props as {
    statuses?: StatusTypes[],
    username?: string,
    id?: number
};

// 必須データがない場合に早期リターン
if (!statuses || !rawUsername || !rawId) {
    return <div>データが不足しています</div>;
}

// データのマッピング
const status = statuses[rawId] ?? null;
if (!status) {
    return <div>データがありません</div>;
}
    const userSaving: number = status.saving;
    const userInvestment: number = status.investment;
    const userEssential: number = status.essential;
    const userExtravagance: number = status.extravagance;
    const userDonation: number = status.donation;

    // const userAvatar = user?.avatar || noImageAvatar;    // const savingsCount = savings.filter((item: any) => item.goal_level === 1).length;
    // // const filteredItems = history.filter((item) => item.category === 2);
    // // // const investmentTotal = filteredItems.reduce((total, item) => total + (item.amount_saved || 0), 0);

    // // category 1 のデータを抽出し、amount_saved の合計を計算
    // const savingsTotal = history
    //     .filter((item) => item.category === 1)
    //     .reduce((total, item) => total + (item.amount_saved || 0), 0);

    // const investmentTotal = history
    //     .filter((item) => item.category === 2)
    //     .reduce((total, item) => total + (item.amount_saved || 0), 0);

    // const essentialTotal = history
    //     .filter((item) => item.category === 3)
    //     .reduce((total, item) => total + (item.amount_saved || 0), 0);

    // const extravagancelTotal = history
    //     .filter((item) => item.category === 4)
    //     .reduce((total, item) => total + (item.amount_saved || 0), 0);

    // const donationTotal = history
    //     .filter((item) => item.category === 5)
    //     .reduce((total, item) => total + (item.amount_saved || 0), 0);

    // let donationLavel:number = donationTotal
    // if (donationTotal < 1000) {
    //     donationLavel = 1;
    // } else if (donationLavel < 2000) {
    //     donationLavel = 2;
    // } else if (donationLavel < 3000) {
    //     donationLavel = 3;
    // } else if (donationLavel < 4000) {
    //     donationLavel = 4;
    // } else if (donationLavel < 5000) {
    //     donationLavel = 5;
    // }

    const userDataAfter = {
        id: rawId,
        name: rawUsername,
        savings: userSaving,
        investment: userInvestment,
        essential: userEssential,
        extravagance: userExtravagance,
        planned_extravagance: userDonation,
        level: 0,
        donation: userDonation,
        avatar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Y7rgTcW5NdDkxvwMW4Gdj2Q3G3lZVBvHHC10A3T_Iwxj0257NbTbdhvWKFOqn7nxXw6-V4P_0VFuJZ_5cQSDPxlazFKTD9N-d1A0IrX0k7LoaVpG3X9IwQ48H0zfXTJOT1JntRr0Lq3o/s400/onepiece01_luffy.png",
    };
    const userAvatar: string = userDataAfter.avatar;

    return (
        <div className='overflow-hidden flex items-center justify-center w-full h-full'>
            <div className='contents_box overflow-auto flex flex-col gap-5 pb-5 w-full md:max-w-[64vmin] h-screen md:border-solid border-0 md:border-8 md:border-black md:rounded-2xl '>

                <div className="flex flex-col gap-8">
                    <FarstView
                        UserData={userDataAfter}
                        category={0}
                        fvImages={userAvatar} />
                    <section className='py-5 md:py-10 px-2'>
                        <TitleSection category='Savings' num={1} />
                        {/* <TopSaving
                            num={savingsCount}
                            listData={savings}
                            historyData={history}
                            childPage={false}
                        /> */}
                        <Link
                        href="/goal-registration"
                            className='flex items-center justify-center rounded-md border border-transparent bg-gradation min-w-32 max-w-52 px-4 py-2 max-h-10 text-sm font-bold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gradation-blue focus:bg-gradation focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:bg-gradation icon-plus mx-auto mt-5 gap-2'>
                            もくひょうをついか
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={12} height={12}>
                                <path fill='#FFF' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                            </svg>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    )
}

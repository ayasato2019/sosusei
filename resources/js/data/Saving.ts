type SavingTypes = {
    saving_id: number;
    user_id: number;
    comment_id: number;
    goal_group_id: number;
    goal_name: string;
    goal_amount: number;
    goal_date: string;
    goal_level: number;
    goal_images: string;
    is_shared: boolean;
    memo: string;
};

export const inputSavingData: SavingTypes[] = [
    {
        saving_id: 1,
        user_id: 1,
        comment_id: 101,
        goal_group_id: 1,
        goal_name: "世界旅行",
        goal_amount: 50000,
        goal_date: "2035-12-31",
        goal_level: 1,
        goal_images: "doctor.png",
        is_shared: true,
        memo: "バックパックで放浪したい。"
    },
    {
        saving_id: 2,
        user_id: 1,
        comment_id: 102,
        goal_group_id: 1,
        goal_name: "走り込み",
        goal_amount: 20000,
        goal_date: "2030-12-31",
        goal_level: 2,
        goal_images: "university.png",
        is_shared: true,
        memo: "体力をつけておく。"
    },
    {
        saving_id: 3,
        user_id: 1,
        comment_id: 103,
        goal_group_id: 1,
        goal_name: "英語の勉強",
        goal_amount: 2000,
        goal_date: "2025-12-31",
        goal_level: 3,
        goal_images: "english.png",
        is_shared: true,
        memo: "ラジオ英会話を聞く。"
    },
    {
        saving_id: 4,
        user_id: 1,
        comment_id: 104,
        goal_group_id: 2,
        goal_name: "家を買う",
        goal_amount: 100000,
        goal_date: "2035-12-31",
        goal_level: 1,
        goal_images: "house.png",
        is_shared: true,
        memo: "将来家を買うための貯金をします。"
    },
    {
        saving_id: 5,
        user_id: 1,
        comment_id: 105,
        goal_group_id: 2,
        goal_name: "頭金を貯める",
        goal_amount: 30000,
        goal_date: "2030-12-31",
        goal_level: 2,
        goal_images: "downpayment.png",
        is_shared: true,
        memo: "家の頭金を貯めます。"
    },
    {
        saving_id: 6,
        user_id: 1,
        comment_id: 106,
        goal_group_id: 2,
        goal_name: "インテリアを買う",
        goal_amount: 5000,
        goal_date: "2025-12-31",
        goal_level: 3,
        goal_images: "furniture.png",
        is_shared: true,
        memo: "新しい家のインテリアを買うための貯金をします。"
    },
    {
        saving_id: 7,
        user_id: 1,
        comment_id: 107,
        goal_group_id: 3,
        goal_name: "世界旅行",
        goal_amount: 300000,
        goal_date: "2030-12-31",
        goal_level: 1,
        goal_images: "worldtravel.png",
        is_shared: true,
        memo: "世界中を旅行するための貯金をします。"
    },
    {
        saving_id: 8,
        user_id: 1,
        comment_id: 108,
        goal_group_id: 3,
        goal_name: "旅行資金を貯める",
        goal_amount: 10000,
        goal_date: "2028-12-31",
        goal_level: 2,
        goal_images: "travel.png",
        is_shared: true,
        memo: "旅行のための資金を貯めます。"
    },
    {
        saving_id: 9,
        user_id: 1,
        comment_id: 110,
        goal_group_id: 3,
        goal_name: "英会話の勉強をする",
        goal_amount: 0,
        goal_date: "2025-12-31",
        goal_level: 2,
        goal_images: "car_image.png",
        is_shared: true,
        memo: "車の修理やメンテナンスのために貯金します。"
    },
    {
        saving_id: 10,
        user_id: 1,
        comment_id: 109,
        goal_group_id: 3,
        goal_name: "パスポートを取る",
        goal_amount: 1000,
        goal_date: "2025-12-31",
        goal_level: 3,
        goal_images: "passport.png",
        is_shared: true,
        memo: "パスポートを取得するための費用を貯めます。"
    },

];

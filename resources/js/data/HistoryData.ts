type HistoryTypes = {
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

export const inputHistoryData: HistoryTypes[] = [
    {
        history_id: 1,
        user_id: 1,
        comments_id: 101,
        category: 1,
        goal_group_id: 201,
        amount_saved: 500,
        memo_images: "",
        date_saved: "2025-01-01",
        memo: "Monthly savings",
        at_create: "2025-01-01T10:00:00Z"
    },
    {
        history_id: 2,
        user_id: 102,
        comments_id: 202,
        category: 2,
        goal_group_id: 302,
        amount_saved: 10000,
        memo_images: "image2.png",
        date_saved: "2025-01-02",
        memo: "Car maintenance fund",
        at_create: "2025-01-02T11:00:00Z"
    },
    {
        history_id: 3,
        user_id: 103,
        comments_id: 203,
        category: 1,
        goal_group_id: 1,
        amount_saved: 15000,
        memo_images: "image1.png",
        date_saved: "2025-01-03",
        memo: "Emergency savings",
        at_create: "2025-01-03T12:00:00Z"
    },
    {
        history_id: 4,
        user_id: 104,
        comments_id: 204,
        category: 3,
        goal_group_id: 303,
        amount_saved: 20000,
        memo_images: "image4.png",
        date_saved: "2025-01-04",
        memo: "Education fund",
        at_create: "2025-01-04T13:00:00Z"
    },
    {
        history_id: 5,
        user_id: 105,
        comments_id: 205,
        category: 2,
        goal_group_id: 1,
        amount_saved: 8000,
        memo_images: "image1.png",
        date_saved: "2025-01-05",
        memo: "Vacation savings",
        at_create: "2025-01-05T14:00:00Z"
    },
    {
        history_id: 6,
        user_id: 106,
        comments_id: 206,
        category: 4,
        goal_group_id: 304,
        amount_saved: 12000,
        memo_images: "image6.png",
        date_saved: "2025-01-06",
        memo: "Gadget purchase",
        at_create: "2025-01-06T15:00:00Z"
    },
    {
        history_id: 7,
        user_id: 107,
        comments_id: 207,
        category: 3,
        goal_group_id: 1,
        amount_saved: 5000,
        memo_images: "image7.png",
        date_saved: "2025-01-07",
        memo: "Birthday gift",
        at_create: "2025-01-07T16:00:00Z"
    },
    {
        history_id: 8,
        user_id: 108,
        comments_id: 208,
        category: 1,
        goal_group_id: 305,
        amount_saved: 2500,
        memo_images: "image2.png",
        date_saved: "2025-01-08",
        memo: "Charity donation",
        at_create: "2025-01-08T17:00:00Z"
    },
    {
        history_id: 9,
        user_id: 109,
        comments_id: 209,
        category: 5,
        goal_group_id: 2,
        amount_saved: 4000,
        memo_images: "image1.png",
        date_saved: "2025-01-09",
        memo: "Fitness goal",
        at_create: "2025-01-09T18:00:00Z"
    },
    {
        history_id: 10,
        user_id: 110,
        comments_id: 210,
        category: 6,
        goal_group_id: 306,
        amount_saved: 9000,
        memo_images: "image10.png",
        date_saved: "2025-01-10",
        memo: "Pet care",
        at_create: "2025-01-10T19:00:00Z"
    }
];

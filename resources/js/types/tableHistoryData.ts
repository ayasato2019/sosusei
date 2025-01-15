// export type HistoryTypes = {
//     history_id: number; //プライマリーキー
//     user_id: number; // 発信者 ユーザーIDと紐付け
//     comments_id: number; // 発言した要素と紐付け
//     category: number; // 1 Saving | 2 Investments | 3 Expenses | 4 WastefulSpending | 5 Donations | 6　Comments,
//     goal_group_id?: number;
//     amount_saved: number; // 貯金額
//     memo_images?: string; // レシートなどの画像
//     date_saved: string; //登録した日
//     memo: string; //一言メモ
//     at_create: string; //タイムスタンプ
//     // amount_title: string; // タイトルは必要項目へ
// }
export type HistoryTypes = {
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

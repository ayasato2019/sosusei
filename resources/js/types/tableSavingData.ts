// export interface SavingTypes {
//     filter(arg0: (item: any) => boolean): unknown;
//     saving_id: number;       // プライマリーキー
//     user_id: number;         // 外部キー
//     comment_id: number;      // バックエンド側で付与
//     goal_group_id: number;   // 初期値1
//     goal_name: string;
//     goal_amount: number;     // 小数点を含む金額
//     goal_date: string;       // 日付 (ISO 8601形式推奨)
//     goal_level: number;
//     goal_images: string;     // URL形式
//     is_shared: boolean;
//     memo?: string | null;     // 任意のフィールド
// };
export interface SavingTypes {
    saving_id: number;
    user_id: number;
    comment_id: number | null;  // nullable対応
    goal_group_id: number;
    goal_name: string;
    goal_amount: number;        // 小数点を含む金額
    goal_date: string;          // 日付 (ISO 8601形式推奨)
    goal_level: number;
    goal_images?: string | null;       // URL形式
    is_shared: boolean;
    memo?: string | null;      // memoをnullableに対応
}

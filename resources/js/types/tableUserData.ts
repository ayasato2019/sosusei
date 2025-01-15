export type UserTypes = {
    id: number;
    user_id: number;
    name: string;
    birth_date: string; // ISO 8601形式の日付文字列
    is_admin: boolean;
    email: string | null; // メールアドレスは親ユーザーのみ
    phone_number: string | null; // 電話番号は親ユーザーのみ
    savings: number; //貯金の合計金額
    investment: number; //投資の合計金額
    essential: number; //必要
    extravagance: number; //欲しい結果
    planned_extravagance?: number; //欲しい予定
    level: number; //寄付のレベルと紐付け
    donation: number; //寄付の合計金額
    avatar?: string;
};

import { useEffect, useState, useRef } from 'react';
import { SavingTypes } from '@/types/tableSavingData';
import { Head, Link } from '@inertiajs/react';
import ConvertPrice from "@/Components/ConvertPrice";
import TitleModal from '@/Components/TitleModal';
import ButtonPrimary from '@/Components/ButtonPrimary';
import ButtonSecondary from '@/Components/ButtonSecondary';

export default function GoalConfirm({ data }: { data: SavingTypes }) {
    const [formData, setFormData] = useState({
        goal_name: "",
        goal_amount: 0,
        goal_date: "2025-01-31",
        goal_level: 1,
        goal_images: "https://borderlesss.sakura.ne.jp/ss1/assets/images/photo-noimages.jpg",
        is_shared: false,
        memo: "",
    });
    const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
    const csrfToken = useRef<string>(metaCsrfToken.content);

    useEffect(() => {
        if (data) {
            setFormData(data); // 親から受け取ったdataを状態にセット
        }
    }, [data]);

    return (
        <>
            <Head title="確認" />
            <div className='overflow-hidden flex items-center justify-center w-full h-full'>
                <div className='contents_box overflow-auto flex flex-col gap-5 pb-5 w-full md:max-w-[64vmin] h-screen md:border-solid border-0 md:border-8 md:border-black md:rounded-2xl '>
                    <div className="flex flex-col gap-8">
                        <form action="/goal-done" method="POST">
                            <input type="hidden" name="_token" value={csrfToken.current} />

                            <div className="flex flex-col gap-5 p-5">
                                <TitleModal title="これでいいかな？" />
                                <label>目標: <p>{formData.goal_name}</p></label>
                                <label>貯金額: <p>{formData.goal_amount}</p></label>
                                <label>期間: <p>{formData.goal_date}</p></label>
                                <label>イメージ: <p>{formData.goal_images}</p></label>
                                <label>メモ: <p>{formData.memo}</p></label>

                                <div className="flex items-center justify-center gap-2">
                                    <ButtonSecondary onClick={() => window.history.back()}>戻る</ButtonSecondary>
                                    <ButtonPrimary type="submit">登録</ButtonPrimary>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import TitleModal from '@/Components/TitleModal';
import ButtonPrimary from '@/Components/ButtonPrimary';
import InputPrice from '@/Components/InputPrice';
import { useState, useRef } from 'react';
import InputText from '@/Components/InputText';
import InputDate from '@/Components/InputDate';

export default function Saving_Goal_Create({
}) {
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


    const handleChange = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value, // valueはstring型として直接更新
        });
    };
    interface StepProps {
        onChange: (value: string | number) => void;  // valueの型をstringまたはnumberに変更
    }

    return (
        <>
            <Head title="登録完了" />
            <div className='overflow-hidden flex items-center justify-center w-full h-full'>
                <div className='contents_box overflow-auto flex flex-col gap-5 pb-5 w-full md:max-w-[64vmin] h-screen md:border-solid border-0 md:border-8 md:border-black md:rounded-2xl '>
                    <h2>登録完了</h2>
                </div>
            </div>
        </>
    );
}

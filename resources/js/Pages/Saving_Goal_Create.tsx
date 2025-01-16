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
        goal_images: "",
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
            <Head title="目標を登録" />
            <div className='overflow-hidden flex items-center justify-center w-full h-full'>
                <div className='contents_box overflow-auto flex flex-col gap-5 pb-5 w-full md:max-w-[64vmin] h-screen md:border-solid border-0 md:border-8 md:border-black md:rounded-2xl '>

                    <div className="flex flex-col gap-8">
                        <form method='POST' action='/goal-confirm'>
                            <input type="hidden" name="_token" value={csrfToken.current} />
                            <input type="hidden" name="goal_level" value={1} />
                            <div className="flex flex-col gap-5 p-5">
                                <TitleModal title="もくひょうを 立てよう！" />
                                <div>
                                    <label className="flex flex-col items-center justify-start gap-1">
                                        <span>もくひょう</span>
                                        <InputText
                                            name='goal_name'
                                            value={formData.goal_name}
                                            placeholder="(れい) 宇宙飛行士になりたい"
                                            onChange={(e) => handleChange('goal_name', e.target.value)}
                                            className="w-full mt-1 text-black placeholder:italic placeholder:text-darkgray focus:outline-2 focus:outline-purple"
                                            required
                                        />
                                    </label>
                                </div>

                                <div className="flex flex-col items-center justify-between gap-1">
                                    <span>いつ までに たっせい する？</span>
                                    <InputDate
                                        name='goal_date'
                                        value={formData.goal_date}
                                        onChange={(e) => handleChange('goal_date', e.target.value)}
                                        className="w-full mt-1 text-black placeholder:italic placeholder:text-darkgray focus:outline-2 focus:outline-purple"
                                        required
                                        />
                                </div>

                                <div className="flex flex-col items-center justify-between gap-1">
                                    <span>いくら ためる？</span>
                                    <InputPrice
                                        name='goal_amount'
                                        value={formData.goal_amount}
                                        onChange={(e) => handleChange('goal_amount', e.target.value)}
                                        className="w-full mt-1 text-black placeholder:italic placeholder:text-darkgray focus:outline-2 focus:outline-purple"
                                        required
                                        />
                                </div>

                                {/* <div>
                                    <label className="flex flex-col items-center justify-between gap-1">
                                        <span>イメージ がぞうを せってい しよう</span>
                                        <input
                                            name='goal_images'
                                            type="file"
                                            className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none'
                                            onChange={(e) => handleChange('goal_images', e.target.value)}
                                            />
                                    </label>
                                </div> */}

                                <div>
                                    <label className="flex flex-col items-center justify-between gap-1">
                                        <span>メモを かこう</span>
                                        <InputText
                                            name='memo'
                                            value={formData.memo}
                                            onChange={(e) => handleChange('memo', e.target.value)}
                                            className="w-full mt-1 text-black placeholder:italic placeholder:text-darkgray focus:outline-2 focus:outline-purple"
                                        />
                                    </label>
                                </div>
                                <div className="mx-auto mt-5">
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

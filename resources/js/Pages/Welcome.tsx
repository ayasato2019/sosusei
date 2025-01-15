import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import TitleModal from '@/Components/TitleModal';
import ButtonPrimary from '@/Components/ButtonPrimary';
import InputPrice from '@/Components/InputPrice';
import { useState, useRef } from 'react';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const [formData, setFormData] = useState({
        savingValue: 0,
        investmentValue: 0,
        essentialValue: 0,
        extravaganceValue: 0,
        donationValue: 0,
    });

    const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
    const csrfToken = useRef<string>(metaCsrfToken.content);


    const handleChange = (field: string, value: string | number) => {
        setFormData({
            ...formData,
            [field]: Number(value), // 入力値を更新
        });
    };


    return (
        <>
            <Head title="初回登録" />
            <div className='overflow-hidden flex items-center justify-center w-full h-full'>
                <div className='contents_box overflow-auto flex flex-col gap-5 pb-5 w-full md:max-w-[64vmin] h-screen md:border-solid border-0 md:border-8 md:border-black md:rounded-2xl '>

                    <div className="flex flex-col gap-8">
                        <form method='POST' action='/confirm'>
                            <input type="hidden" name="_token" value={csrfToken.current} />
                            <div className="flex flex-col gap-5 p-5">
                                <TitleModal title="いま もってる きんがくを とうろくしよう" />
                                <label className="flex items-center justify-between gap-1">
                                    <span>ちょきん</span>
                                    <InputPrice
                                        name='saving'
                                        value={formData.savingValue}
                                        onChange={(e) => handleChange('savingValue', e.target.value)}
                                        className="w-full mt-1 text-black placeholder:italic placeholder:text-darkgray focus:outline-2 focus:outline-purple"
                                        max="10000000000"
                                    />
                                </label>
                                <label className="flex items-center justify-between gap-1">
                                    <span>とうし</span>
                                    <InputPrice
                                        name='investment'
                                        value={formData.investmentValue}
                                        onChange={(e) => handleChange('investmentValue', e.target.value)}
                                        className="w-full mt-1 text-black placeholder:italic placeholder:text-darkgray focus:outline-2 focus:outline-purple"
                                        max="10000000000"
                                    />
                                </label>
                                <label className="flex items-center justify-between gap-1">
                                    <span>ひつよう</span>
                                    <InputPrice
                                        name='essential'
                                        value={formData.essentialValue}
                                        onChange={(e) => handleChange('essentialValue', e.target.value)}
                                        className="w-full mt-1 text-black placeholder:italic placeholder:text-darkgray focus:outline-2 focus:outline-purple"
                                        max="10000000000"
                                    />
                                </label>
                                <label className="flex items-center justify-between gap-1">
                                    <span>ほしい</span>
                                    <InputPrice
                                        name='extravagance'
                                        value={formData.extravaganceValue}
                                        onChange={(e) => handleChange('extravaganceValue', e.target.value)}
                                        className="w-full mt-1 text-black placeholder:italic placeholder:text-darkgray focus:outline-2 focus:outline-purple"
                                        max="10000000000"
                                    />
                                </label>
                                <label className="flex items-center justify-between gap-1">
                                    <span>きふ</span>
                                    <InputPrice
                                        name='donation'
                                        value={formData.donationValue}
                                        onChange={(e) => handleChange('donationValue', e.target.value)}
                                        className="w-full mt-1 text-black placeholder:italic placeholder:text-darkgray focus:outline-2 focus:outline-purple"
                                        max="10000000000"
                                    />
                                </label>
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

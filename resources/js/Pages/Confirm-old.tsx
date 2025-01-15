import { useEffect, useState, useRef } from 'react';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import ConvertPrice from "@/Components/ConvertPrice";
import TitleModal from '@/Components/TitleModal';
import ButtonPrimary from '@/Components/ButtonPrimary';
import ButtonSecondary from '@/Components/ButtonSecondary';

type firstStepData = {
    saving: number;
    investment: number;
    essential: number;
    extravagance: number;
    donation: number;
}

export default function Confirm({ data }: { data: firstStepData }) {
    const [firststep, setFirststep] = useState<firstStepData>({
        saving: 0,
        investment: 0,
        essential: 0,
        extravagance: 0,
        donation: 0,
    });
    const metaCsrfToken = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement;
    const csrfToken = useRef<string>(metaCsrfToken.content);

    useEffect(() => {
        if (data) {
            setFirststep(data); // 親から受け取ったdataを状態にセット
        }
    }, [data]);

    return (
        <>
            <Head title="確認" />
            <div className='overflow-hidden flex items-center justify-center w-full h-full'>
                <div className='contents_box overflow-auto flex flex-col gap-5 pb-5 w-full md:max-w-[64vmin] h-screen md:border-solid border-0 md:border-8 md:border-black md:rounded-2xl '>
                    <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-5 p-5">
                                <TitleModal title="これでいいかな？" />
                                <label>ちょきん: <p>{firststep.saving}</p></label>
                                <label>とうし: <p>{firststep.investment}</p></label>
                                <label>ひつよう: <p>{firststep.essential}</p></label>
                                <label>ほしい: <p>{firststep.extravagance}</p></label>
                                <label>きふ: <p>{firststep.donation}</p></label>
                                <div className="flex items-center justify-center gap-2">
                                    <ButtonPrimary type="submit">トップページへ</ButtonPrimary>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

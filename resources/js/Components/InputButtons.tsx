import { useState, useRef } from 'react';
import InputPrice from '@/Components/InputPrice';
import ButtonMemo from '@/Components/ButtonMemo';
import ButtonComment from '@/Components/ButtonComment';
import ButtonPaid from '@/Components/ButtonPaid';
import ButtonSaving from '@/Components/ButtonSavings';
import InputSelect from '@/Components/InputSelectInterval';

interface InputButtonsProps {
    className?: string;
    onChange: (newValue: number) => void;
    onSave: (newAmount: number) => void;
}

export default function InputButtons({
    className = '',
    onChange,
    onSave,
}: InputButtonsProps) {
    const [price, setPrice] = useState<number>(0);

    // priceの変更をハンドリング
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = Number(e.target.value);
        console.log("Price changed:", newPrice); // デバッグ用
        setPrice(newPrice);
        onChange(newPrice);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    // 保存ボタンのクリック時に呼ばれる関数
    const handleSave = () => {
        onSave(price);
    }

    return (
        <div className={`flex items-center justify-start flex-col gap-1 ${className}`}>
            <div className="flex items-center justify-start gap-1 mb-1">
                <InputPrice
                    value={price}
                    onChange={handlePriceChange}
                />
                {/* <InputSelect /> */}
            </div>
            {/* <div className="flex items-center justify-start gap-1">
                <ButtonPaid />
                <ButtonMemo />
                <ButtonComment />
            </div> */}
            <ButtonSaving onClick={handleSave} />
        </div>
    );
}

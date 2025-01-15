import React, { useState } from 'react';

interface UserAvatarProps {
    initialImage?: string | null; // 初期画像は文字列またはnull
    onImageChange?: (file: File | null) => void; // 画像変更時のコールバック関数
}

export default function UserAvatar({
    initialImage = null,
    onImageChange = () => {},
    allowUpload = true, // アップロードを許可するかどうかを制御する
}: {
    initialImage?: string | null;
    onImageChange?: (file: File | null) => void;
    allowUpload?: boolean; // ファイルアップロードの有効/無効を制御
}) {
    const [imagePreview, setImagePreview] = useState<string | null>(initialImage);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
                onImageChange(file);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
            onImageChange(null);
        }
    };

    return (
        <div className="user-avatar">
            <div className="overflow-hidden w-6 h-6 flex items-center justify-center">
                {imagePreview ? (
                    <img
                        src={imagePreview}
                        alt="User Avatar"
                        className="rounded-full w-6 h-6 object-cover"
                    />
                ) : (
                    <div className="overflow-hidden bg-gray rounded-full w-6 h-6 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">No Image</span>
                    </div>
                )}
            </div>
            {allowUpload && ( //  が true の場合のみ input を表示
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            )}
        </div>
    );
}

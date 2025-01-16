import { Head, Link } from '@inertiajs/react';
import ButtonSecondary from '@/Components/ButtonSecondary';

export default function Login() {
    return (
        <div className="flex items-center justify-center gap-2 w-full h-screen">
        <Link
            href='https://borderlesss.sakura.ne.jp/sotsugyouseisaku/login'
            className='flex items-center justify-center rounded-md border border-transparent bg-gradation min-w-32 max-w-52 px-4 py-2 max-h-10 text-sm font-bold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gradation-blue focus:bg-gradation focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:bg-gradation'>
                ログイン
        </Link>
        <Link
            href='https://borderlesss.sakura.ne.jp/sotsugyouseisaku/register'
            className='inline-flex items-center justify-center rounded-md min-w-32 max-w-52 max-h-10 border border-solid border-primary bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary shadow-sm transition duration-150 ease-in-out hover:bg-orange hover:border-orange hover:text-white  focus:outline-none hover:text focus:ring-2 focus:ring-orange focus:ring-offset-2 disabled:opacity-25'>
                新規登録
        </Link>
        </div>
    )
}

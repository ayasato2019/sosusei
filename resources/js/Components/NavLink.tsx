import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-primary border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out' +
                (active
                    ? 'text-gray-900 focus:border-primary'
                    : 'border-transparent text-gray hover:border-gray hover:text-darkgray focus:border-gray focus:text-darkgray') +
                className
            }
        >
            {children}
        </Link>
    );
}

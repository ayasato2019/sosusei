import { LabelHTMLAttributes } from 'react';

export default function InputLabel({
    value,
    children,
    className = '',
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={
                `block font-medium ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}

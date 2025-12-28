import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-white hover:bg-[#0b3826] focus:ring-primary",
        secondary: "bg-accent text-primary hover:bg-[#b0f0d0] focus:ring-accent",
        outline: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-200",
        ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
        white: "bg-white text-primary hover:bg-gray-50 focus:ring-white",
    };

    const sizes = {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

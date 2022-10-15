import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

/*
Quando a gente usa o Slot do Radix, ele pega todas as propriedades que a gente tá recebendo no componente Slot e repassa pro primeiro componente que vem dentro do children, no nosso caso, é o <p>. Em síntese, ele permite que o dev escolha qual a melhor tag e não fique preso a uma específica
*/

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean; 
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
        className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white', className, 
    )}
        {...props}
        >
            {children}
            </Comp>
    )
}
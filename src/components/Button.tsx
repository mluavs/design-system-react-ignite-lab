import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

/*
Quando a gente usa o Slot do Radix, ele pega todas as propriedades que a gente tá recebendo no componente Slot e repassa pro primeiro componente que vem dentro do children, no nosso caso, é o <p>. Em síntese, ele permite que o dev escolha qual a melhor tag e não fique preso a uma específica
*/

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean; 
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
        className={clsx(
            'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white', 
    )}
        >
            {children}
            </Comp>
    )
}
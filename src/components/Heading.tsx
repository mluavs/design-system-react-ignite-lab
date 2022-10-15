import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

/*
Quando a gente usa o Slot do Radix, ele pega todas as propriedades que a gente tá recebendo no componente Slot e repassa pro primeiro componente que vem dentro do children, no nosso caso, é o <p>. Em síntese, ele permite que o dev escolha qual a melhor tag e não fique preso a uma específica
*/

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean; 
    className?: string; 
}

export function Heading({size = 'md', children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp className={clsx('text-gray-100 font-bold font-sans', 
        {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg',
        },
        className,
    )}
        >
            {children}
            </Comp>
    )
}
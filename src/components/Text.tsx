import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

/*
Quando a gente usa o Slot do Radix, ele pega todas as propriedades que a gente tá recebendo no componente Slot e repassa pro primeiro componente que vem dentro do children, no nosso caso, é o <p>. Em síntese, ele permite que o dev escolha qual a melhor tag e não fique preso a uma específica
*/

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean; 
}

export function Text({size = 'md', children, asChild }: TextProps) {
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp className={clsx('text-gray-100 font-sans', 
        {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg',
        }
    )}
        >
            {children}
            </Comp>
    )
}
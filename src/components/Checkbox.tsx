import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

/*
Quando a gente usa o Slot do Radix, ele pega todas as propriedades que a gente tá recebendo no componente Slot e repassa pro primeiro componente que vem dentro do children, no nosso caso, é o <p>. Em síntese, ele permite que o dev escolha qual a melhor tag e não fique preso a uma específica
*/

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </CheckboxPrimitive.Indicator> 
        </CheckboxPrimitive.Root>           
    )
}
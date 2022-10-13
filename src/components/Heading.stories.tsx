import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    //args tá vindo aqui como se fosse props
    args: {
        children: 'Lorem ipsun.',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<HeadingProps>

/*
essa exportação default que ta recebendo um objeto vazio é um padrão do storybook! isso foi feito lá no início, pra que a interface do Storybook funcionasse e mostrasse o Text. 
O que foi feito aqui com a importação do Storybook lá em cima e essa passagem de parâmetros aqui embaixo é que eu consigo passar propriedades específicas nas variáveis, enquanto mantenho configurações globais ali em cima. 
*/
export const Default: StoryObj<HeadingProps> = {} //esse HeadingProps ta sendo passado pra que dentro de args eu tenha as opções do intelissence
export const Small: StoryObj<HeadingProps> = 
{
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<HeadingProps> = 
{
    args: {
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<HeadingProps> = 
{
    args: {
        asChild: true,
        children: (
            <h1>Heading with h1</h1>
        )
    }, 
    argTypes: {
        children: {
            table: {
                    disable: true,
            }
        }, 
        asChild: {
            control: {
                disable: true,
            }
        }
    }
}


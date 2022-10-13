import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
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

} as Meta<TextProps>

/*
essa exportação default que ta recebendo um objeto vazio é um padrão do storybook! isso foi feito lá no início, pra que a interface do Storybook funcionasse e mostrasse o Text. 
O que foi feito aqui com a importação do Storybook lá em cima e essa passagem de parâmetros aqui embaixo é que eu consigo passar propriedades específicas nas variáveis, enquanto mantenho configurações globais ali em cima. 
*/
export const Default: StoryObj<TextProps> = {} //esse TextProps ta sendo passado pra que dentro de args eu tenha as opções do intelissence
export const Small: StoryObj<TextProps> = 
{
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<TextProps> = 
{
    args: {
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<TextProps> = 
{
    args: {
        asChild: true,
        children: (
            <p>Text with P tag</p>
        )
    }, 
    argTypes: {
        children: {
            control: {
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


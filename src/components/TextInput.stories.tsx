import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        /*
        aqui embaixo nessa children, tava retornando um jsx (), e tinha um react fragment. pra esse fragment não aparecer na tela do storybook, trocamos o retorno por um vetor [], eliminando a necessidade do fragment.
        */
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your e-mail' />
        ], 
        
    },
    argTypes: {
        children: {
            table: {
                    disable: true,
            }
        },
    }

} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your e-mail' />
    }
}
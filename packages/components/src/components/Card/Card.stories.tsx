import { Meta, StoryObj } from '@storybook/react';
import { Card as CardComponent } from './Card';

const meta: Meta = {
    title: 'Misc/Card',
    component: CardComponent,
} as Meta;
export default meta;

export const Card: StoryObj = {
    args: {
        children: 'Some content',
        label: '',
        paddingType: 'normal',
        margin: { top: undefined, right: undefined, bottom: undefined, left: undefined },
    },
    argTypes: {
        paddingType: {
            options: ['small', 'none', 'normal'],
            control: {
                type: 'radio',
            },
        },
        margin: {
            table: {
                category: 'Frame props',
            },
        },
    },
};

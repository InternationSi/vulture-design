/*
 * @Author: sfy
 * @Date: 2023-04-04 22:36:57
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-04 22:49:50
 * @FilePath: /vulture-design/packages/vuele/src/stories/Drage.stories.ts
 * @Description: update here
 */
import type { Meta, StoryObj } from '@storybook/vue3';

import Drage from '../components/drage/index.vue'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Example/Drage',
  component: Drage,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: { primary: false }, // default value
} satisfies Meta<typeof Drage>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};

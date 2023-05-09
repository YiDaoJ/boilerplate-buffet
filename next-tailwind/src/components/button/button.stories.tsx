import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button color="primary">Primary Button</Button>,
};

export const Secondary: Story = {
  render: () => <Button color="secondary">Secondary Button</Button>,
};

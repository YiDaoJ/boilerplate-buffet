import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button color="primary">Primary</Button>,
};

export const Secondary: Story = {
  render: () => <Button color="secondary">Secondary</Button>,
};

export const Warning: Story = {
  render: () => <Button color="warning">Warning</Button>,
};

export const Danger: Story = {
  render: () => <Button color="danger">Danger</Button>,
};

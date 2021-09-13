import React from 'react';
import { action } from '@storybook/addon-actions';

// import { Button } from './Button';

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

import Button from './components/Button';

export default {
  title: 'Button',
  component: Button
}

export const PrimaryButton = () => <Button onClick={action('clicked')}>Primary Button</Button>;

export const SecondaryButton = () => <Button onClick={action('clicked')}>Secondary Button</Button>;
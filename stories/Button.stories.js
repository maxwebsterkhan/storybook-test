import { createButton } from './Button';
import buttonStyles from './button.css';

const buttonAnimations = [
  'fade',
  'scale',
  'color-change',
  'pulse',
  'rotate',
];

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: ({ label, buttonAnimation, ...args }) => {
    const button = createButton({ label, ...args });
    button.classList.add(`storybook-button--${buttonAnimation}`);

    const styleTag = document.createElement('style');
    styleTag.innerHTML = buttonStyles;
    button.prepend(styleTag);

    return button;
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    buttonAnimation: {
      control: { type: 'select' },
      options: ['', ...buttonAnimations],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

import clsx from 'clsx';

const getColor = (color?: ColorType) => {
  switch (color) {
    case 'secondary':
      return 'bg-amber-600 text-zinc-100';
    case 'danger':
      return 'bg-rose-600 text-zinc-100';
    case 'warning':
      return 'bg-amber-300 text-slate-500';
    case 'primary':
    default:
      return 'bg-violet-500 text-zinc-100';
  }
};

type ColorType = 'primary' | 'secondary' | 'warning' | 'danger';

interface ButtonProps {
  color: ColorType;
  onClick?(): void;
}

export function Button({ children, color, onClick }: ButtonProps) {
  return (
    <button
      className={clsx([
        'flex justify-center items-center cursor-pointer',
        'px-8 py-4 rounded-md text-lg',
        'shadow-md hover:shadow-lg active:shadow-inner',
        getColor(color),
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

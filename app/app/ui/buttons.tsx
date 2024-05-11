import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Buttons({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex max-w-full items-center bg-none font-medium text-white ring-1 ring-[#64D28B] transition-colors hover:ring-[#64D28B]/75   ',
        className,
      )}
    >
      {children}
    </button>
  );
}

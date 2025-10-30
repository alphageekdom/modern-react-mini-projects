import { forwardRef } from 'react';

const Button = forwardRef(({ children, className, onClick }, ref) => {
  return (
    <button onClick={onClick} className={className} ref={ref}>
      {children}
    </button>
  );
});

export default Button;

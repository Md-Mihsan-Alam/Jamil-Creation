import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  className = '',
  icon: Icon = null,
  iconPosition = 'left',
  ...props 
}) => {
  const baseClasses = 'font-bold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#d4a373] text-[white] hover:bg-[#ce9155]',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 focus:ring-gray-500',
  };
  
  const sizes = {
    small: 'px-3 py-2 text-sm h-8',
    medium: 'px-4 py-2 text-base h-10',
    large: 'px-6 py-3 text-lg h-12',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-6 h-6 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-6 ml-2" />}
    </button>
  );
};

export default Button;
import React from "react";

interface ChildComponentProps {
  toggleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ChildComponentProps> = ({ toggleClick }) => {
  return (
    <div>
      <button
        type="submit"
        className="bg-Orange h-[38px] font-[400] grid place-items-center p-[10px] text-White text-[15px] uppercase w-full rounded-[30px] tracking-widest hover:bg-White hover:text-Orange"
        onClick={toggleClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Button;

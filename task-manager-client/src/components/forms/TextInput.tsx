import type { ReactElement, ElementRef } from "react";

type props = {
  label: string;
  placeholder?: string;
};

import { useId, forwardRef } from "react";

const TextInput = forwardRef<HTMLInputElement, props>(
  ({ label, placeholder }, ref): ReactElement => {
    const id = useId();

    return (
      <div className='form-control w-full'>
        <label
          className='label'
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className='input'
          ref={ref}
          id={id}
          type='text'
          placeholder={placeholder || ""}
        />
      </div>
    );
  }
);

export default TextInput;

import type { ReactElement, ElementRef } from "react";

type props = {
  label: string;
  placeholder?: string;
};

import { useId, forwardRef } from "react";

const TextBox = forwardRef<HTMLTextAreaElement, props>(
  ({ label, placeholder }, ref): ReactElement => {
    const id = useId();

    return (
      <div className='form-control w-full'>
        <label
          className='label font-semibold capitalize text-gray-500'
          htmlFor={id}
        >
          {label}
        </label>
        <textarea
          className='textarea-bordered textarea h-36'
          ref={ref}
          id={id}
          placeholder={placeholder || ""}
        ></textarea>
      </div>
    );
  }
);

export default TextBox;

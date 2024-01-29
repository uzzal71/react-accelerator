import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = (props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => realInputRef.current.focus(),
  }));

  return (
    <>
      <input {...props} ref={realInputRef} />
    </>
  );
};

const ForwardedMyInput = forwardRef(MyInput);

export default ForwardedMyInput;

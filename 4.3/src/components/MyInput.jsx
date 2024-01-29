import { forwardRef } from "react";

const MyInput = (props) => {
  return (
    <>
      <input {...props} />
    </>
  );
};

const ForwardedMyInput = forwardRef(MyInput);

export default ForwardedMyInput;

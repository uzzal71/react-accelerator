import Avatar from "./Avatar";
import Info from "./Info";

export default function Profile(props) {
  return (
    <>
      <Avatar {...props} />
      <Info age={props.age} />
    </>
  );
}

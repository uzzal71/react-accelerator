import Info from "./Info";

export default function Profile({ children }) {
  const { age } = children.props;
  return (
    <>
      {children}
      <Info age={age} />
    </>
  );
}

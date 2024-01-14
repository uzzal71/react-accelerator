import { useState } from "react";

export default function User() {
  const [user, setUser] = useState({
    name: "Sumit Saha",
    age: 25,
    contact: {
      email: "sumitsaha@learnwithsumit.com",
      address: "Dhaka, Bangladesh",
    },
  });

  function handleClick() {
    setUser({
      ...user,
      contact: { ...user.contac },
    });
  }

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.contact.email}</p>
      <p>{user.contact.address}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

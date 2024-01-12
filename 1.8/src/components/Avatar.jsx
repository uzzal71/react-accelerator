import { getImageUrl } from "./utils.js";

/*
{
  person: {
    name: "Lin Lanying",
    imageId: "1bX5QH6"
  },
  size: 100
}
*/

export default function Avatar({ person, size = 0 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

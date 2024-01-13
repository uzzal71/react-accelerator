import avatar from "../assets/avatar.png";

export default function Student() {
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">1</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={avatar}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">John Smith</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">A+</td>
      <td className="p-5 text-sm md:text-xl text-center">98%</td>
    </tr>
  );
}

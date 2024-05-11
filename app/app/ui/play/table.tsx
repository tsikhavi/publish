import StarRating from './rating';
import Image from 'next/image';

type TableRowProps = {
  description: string;
  seller: string;
  price: string;
};

const TableRow = ({ description, seller, price }: TableRowProps) => (
  <tr className="border-b border-[#5C5C5C] bg-[#272727]">
    <th
      scope="row"
      className="whitespace-nowrap px-6 py-4 text-xs font-medium text-[#C1C1C1]"
    >
      {description}
    </th>
    <td className="px-6 py-4">
      <div className="flex items-start overflow-hidden rounded-lg bg-inherit shadow-md">
        <div className="flex-shrink-0">
          <Image
            className="mt-4 h-8 w-8 rounded-full object-cover"
            src="/Images/user-profile.png"
            alt="Placeholder image"
            width={32}
            height={32}
          />

        </div>
        <div className="mx-2">
          <h2 className="text-xs font-semibold text-white">{seller}</h2>
          <button className="mt-2 rounded-full bg-yellow-500 p-2 text-xs text-white hover:bg-yellow-600">
            Я крутой
          </button>
          <StarRating rating={5} />

          <p className="mt-2 text-xs text-[#C1C1C1]">в сети 5 минут назад </p>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 text-[16px] font-semibold">
      {price}
      <span>
        <button
          className="mx-2 mt-2 inline-flex rounded-lg bg-[#459963] p-2
             text-xs text-white hover:bg-yellow-600"
        >
          Купить
        </button>
      </span>
      <div className="ml-6 mt-1 flex flex-row" dir="ltr">
        <Image
          src="/Images/icon.png"
          alt=""
          height={16}
          width={16}
          className="ml-0 h-4 w-4 "
        />
        <Image
          src="/Images/pin.png"
          alt=""
          height={16}
          width={16}
          className="ml-2 h-4 w-4 "
        />
      </div>
    </td>
  </tr>
);

export default TableRow;

import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="flex w-full items-center justify-center px-1 py-1">
    <div className="mb-4 flex h-40 w-full flex-col rounded-lg bg-[#393939] px-4 py-5">
      <Link href="/dashboard/{title}">
        <h4 className="mb-1 text-[14px] font-bold tracking-normal text-[#F3F3F3]">
          {title}
        </h4>
      </Link>

      <p className="text-[12px] tracking-wide text-[#C1C1C1] ">{description}</p>
    </div>
  </div>
);

export default Card;

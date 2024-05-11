import Link from 'next/link';

export default function AlphabetNav() {
  // Created an array of alphabets from A to Z and added the additional characters
  const characters = [
    ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)),
    'А',
    'К',
    'Т',
    '8',
  ];

  return (
    <div className="alphabet-div mx-auto my-2 bg-[#323232] px-2 py-4">
      <ul className="mt-6 space-y-1">
        {characters.map((character) => (
          <li key={character}>
            <Link
              href={`/dashboard/${character}`}
              className="block rounded-lg bg-none px-2 py-0 text-sm font-semibold leading-tight text-[#64D28B] hover:text-[#64D28B]/75"
            >
              {character}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href={'/'}
      className="text-lg font-black tracking-wider text-gray-900"
    >
      <span className="text-2xl text-violet-600">E</span>
      {'VANDRO'}
    </Link>
  );
}

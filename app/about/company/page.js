'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function Company() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const user = searchParams.get('user');

  return (
    <div>
      <h1 className="bg-white text-black">This is my company for {user}</h1>
      <button
        className="bg-black text-white px-4 py-2 mt-4"
        onClick={() => router.push('/page/ritesh')}
      >
        Go to Ritesh's Page
      </button>
    </div>
  );
}

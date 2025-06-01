// Logo.js
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link href="/">
        <Image
          src="/Untitled design.jpg"
          alt="Wafiah Logo"
          width={130}
          height={40}
          priority
        />
      </Link>
    </div>
  );
}

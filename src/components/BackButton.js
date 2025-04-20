'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/BackButton.module.css';

export default function BackButton({ label = '← Back', href = null }) {
  const router = useRouter();

  if (href) {
    return (
      <Link href={href} className={styles.backButton}>
        {label}
      </Link>
    );
  }

  return (
    <button className={styles.backButton} onClick={() => router.back()}>
      {label}
    </button>
  );
}

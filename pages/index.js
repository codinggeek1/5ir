import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.css';
import { useEffect, useState } from 'react';

function Home() {
  const [currentAccount, setCurrentAccount] = useState();

  return (
    <div className={styles.home}>
      <div className={styles.home_left}>
        <h2 style={{ fontSize: "4em" }} className={styles.heading}>
          The new crowdfunding solution of web3
        </h2>
        <p>Create campaigns for your favorite causes, spread awareness, or tell your story with ease campaigning on our platform</p>
        <Link href="/campaigns">
          <button className={styles.btn}>
            Campaigns
          </button>
        </Link>
        <Link href="/listing">
          <button className={styles.btn}>
            List a campaign
          </button>
        </Link>
      </div>
      <div className={styles.home_right}>
        <div className={styles.row_1}>
          <Image src="/logo.png" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Home;

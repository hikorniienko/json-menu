import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Menu from '../Menu';

export default function Page() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  }, [menuActive]);

  return (
    <>
      <div className={styles.wrap}>
        <button
          className={styles.burger}
          onClick={() => setMenuActive(!menuActive)}
        >
          <svg
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h48v48h-48z" fill="none" />
            <path d="M6 36h36v-4h-36v4zm0-10h36v-4h-36v4zm0-14v4h36v-4h-36z" />
          </svg>
        </button>
      </div>
      <Menu active={menuActive} state={setMenuActive} />
    </>
  );
}

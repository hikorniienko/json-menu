import React from 'react';
import MenuLi from '../MenuLi';
import styles from './index.module.scss';
import data from './HS.json';

export default function Menu() {
  return (
    <div className={styles.wrap}>
      <ul className={styles.menu}>
        <MenuLi data={data} />
      </ul>
    </div>
  );
}

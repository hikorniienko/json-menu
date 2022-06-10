import React from 'react';
import MenuLi from '../MenuLi';
import styles from './index.module.scss';

export default function MenuUl({ data }) {
  return (
    <ul className={styles.ul}>
      {data.map((item) => (
        <MenuLi key={item.key} data={item} />
      ))}
    </ul>
  );
}

import React from 'react';
import MenuLi from '../MenuLi';
import styles from './index.module.scss';

export default function MenuUl({ data, renderFull }) {
  return (
    <ul className={styles.ul}>
      {data.map((item) => (
        <MenuLi key={item.key} data={item} renderFull={renderFull} />
      ))}
    </ul>
  );
}

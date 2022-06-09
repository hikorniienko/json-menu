import React, { useState } from 'react';
import MenuUl from '../MenuUl';
import styles from './index.module.scss';

export default function MenuLi({
  data: {
    active,
    basepw,
    children,
    custom,
    key,
    masterpw,
    name,
    parent,
    premium,
    quad,
    text,
  },
}) {
  const [show, setShow] = useState(active);
  return (
    <li className={styles.li}>
      {premium && <span className={`${styles.label} ${styles.labelPremium}`}>premium</span>}
      {custom && <span className={`${styles.label} ${styles.labelCustom}`}>custom</span>}
      {quad && <span className={`${styles.label} ${styles.labelQuad}`}>quad</span>}
      {masterpw && <span className={`${styles.label} ${styles.labelMasterpw}`}>masterpw</span>}
      {basepw && <span className={`${styles.label} ${styles.labelBasepw}`}>basepw</span>}
      <a href={text}>{name}</a>
      {children.length > 0 && (
        <button className={styles.button} onClick={() => setShow(!show)}>{show ? 'close' : 'open'}</button>
      )}
      {show && <MenuUl data={children} />}
    </li>
  );
}

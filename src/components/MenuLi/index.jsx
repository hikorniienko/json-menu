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
  renderFull,
}) {
  const [show, setShow] = useState(active);

  return (
    <li className={styles.li}>
      <div className={styles.labelWrap}>
        {premium && (
          <span className={`${styles.label} ${styles.labelPremium}`}>
            premium
          </span>
        )}
        {custom && (
          <span className={`${styles.label} ${styles.labelCustom}`}>
            custom
          </span>
        )}
        {quad && (
          <span className={`${styles.label} ${styles.labelQuad}`}>quad</span>
        )}
        {masterpw && (
          <span className={`${styles.label} ${styles.labelMasterpw}`}>
            masterpw
          </span>
        )}
        {basepw && (
          <span className={`${styles.label} ${styles.labelBasepw}`}>
            basepw
          </span>
        )}
      </div>
      <a href={text}>{name}</a>
      {children.length > 0 && (
        <button
          className={`${styles.button} ${show && styles.buttonOpen}`}
          onClick={() => setShow(!show)}
        >
          <svg
            height="512px"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
          </svg>
        </button>
      )}
      {children.length > 0 && (show || renderFull) && <MenuUl data={children} renderFull={renderFull} />}
    </li>
  );
}

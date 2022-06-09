import React from 'react';
import MenuLi from '../MenuLi';

export default function MenuUl({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <MenuLi key={item.key} data={item} />
      ))}
    </ul>
  );
}

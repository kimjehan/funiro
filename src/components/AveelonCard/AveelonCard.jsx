import React from 'react';
import s from './AveelonCard.module.scss';

export default function AveelonCard({ title, desc }) {
  return (
    <div className={s.card}>
      <h3> {title} </h3>
      <p>{desc}</p>
    </div>
  );
}

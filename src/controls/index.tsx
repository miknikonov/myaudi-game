import React from 'react';
import poll from '../polls.svg';
import replay from '../replay.svg';
import eye from '../eye.svg';
import style from './index.module.css';


export const Controls = () => {
  return (
      <div className={style["controls-wrapper"]}>
        <img src={eye} alt={'show'} />
        <img src={poll} alt={'statistics'} />
        <img src={replay} alt={'replay'} />
      </div>
  )
}

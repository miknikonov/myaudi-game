import React, {useContext, useEffect, useState} from 'react';
import { Tile } from './tile';
import { TileType } from '../types'
import style from './index.module.css'
import { observer } from 'mobx-react-lite';
import { StoreContext } from "../store";

export const Game = observer(() => {
  const store = useContext(StoreContext);

  return (
    <div className={style["game-wrapper"]}>
      <div className={style["game-tiles"]}>
        {store.tiles.map(tile =>
          <Tile
            tile={tile}
            key={tile.info}
          />
        )}
      </div>
    </div>
  )
});

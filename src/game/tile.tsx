import React, { useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Text } from "@audi/audi-ui-react";
import style from "./tile.module.css";
import background from './background.module.css';
import { TileType } from "../types";
import { StoreContext } from "../store";

type TileProps = {
  tile: TileType;
}

export const Tile = observer(({ tile }: TileProps) => {
  const store = useContext(StoreContext)

  const clickHandler = () => {
    if (!store.clickDisabled && store.selectedTile?.info !== tile.info) {
      store.selectTile(tile)
    }
  }

  return (
    <div className={style["tile-wrapper"]}>
      <div onClick={clickHandler}
           className={`${style.tile} ${tile.opened || tile.disabled ? style.opened : ''}`}>
        <div
            className={`
            ${style.back} 
            ${background[`background-${tile.pairId}`]}
            ${tile.disabled && style.disabled}
          `}>
          <Text variant={"order4"}>{tile.info}</Text>
        </div>
          <div className={style.front}/>
      </div>
    </div>
  )
});

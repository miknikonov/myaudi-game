import React, { createContext } from 'react';
import { makeAutoObservable } from 'mobx'
import {DataItemType, TileType} from "../types";
import { generatePairs, round1Data } from "../hooks/getPairs";

export class Store {

  public selectedTile: TileType | null;
  public guessedItems: DataItemType[] = [...Array(6)];
  public tiles: TileType[];
  public clickDisabled = false;

  constructor() {
    this.selectedTile = null;
    this.tiles = generatePairs();
    makeAutoObservable(this);
  }

  public selectTile(tile: TileType) {
    if (!this.selectedTile) {
      this.clickDisabled = true;
      this.selectedTile = tile;
      this.openTile(tile);
      this.clickDisabled = false;
    } else {
      this.clickDisabled = true;
      this.openTile(tile);
      if (this.selectedTile.pairId === tile.pairId) {
        const guessed = this.findItemByInfo(tile);
        this.guessedItems = this.guessedItems.map((item, index) => {
          if (index === tile.pairId) {
            return guessed
          }
          return item;
        })
        this.disablePairId(tile.pairId);
        this.selectedTile = null;
        this.clickDisabled = false;
      } else {
        setTimeout(() => {
          this.closeAll();
          this.clickDisabled = false;
        }, 1500);
      }
    }
  }

  private findItemByInfo(tile: TileType): DataItemType {
    const item = round1Data().find(item => tile.info === item.Full || tile.info === item.Abbreviation)
    return item!
  }

  private openTile(tile: TileType) {
    this.tiles = this.tiles.map(item => {
      if (item.info === tile.info) {
        item.opened = true;
      }
      return item;
    })
  }

  private closeAll() {
    this.selectedTile = null;
    this.tiles = this.tiles.map(item => {
      item.opened = false;
      return item;
    })
  }

  private disablePairId (pairId: number) {
    this.tiles = this.tiles.map(item => {
      if (item.pairId === pairId) {
        item.disabled = true;
      }
      return item;
    })
  }

}

export const StoreContext = createContext<Store>(new Store());

export const StoreProvider = ({children}: {children: any}) => {
  return (
      <StoreContext.Provider value={new Store()}>
          {children}
      </StoreContext.Provider>)
}

import raw from '../data.json';
import { DataItemType, TileType } from "../types";

export const round1Data = ():DataItemType[] => {
  const data: DataItemType[] = raw;
  return data.slice(0,6);
}

export const generatePairs = () => {
  const data = round1Data();
  const pairs: TileType[] = data.reduce((acc: TileType[],item: DataItemType, index: number) => {
    const pairId = index;
    acc.push({
      info: item.Abbreviation,
      pairId,
      opened: false,
      disabled: false,
    })
    acc.push({
      info: item.Full,
      pairId,
      opened: false,
      disabled: false
    })
    return acc;
  },[])

  return shuffle(pairs);
}

const shuffle = (initialArray: any) => {
  const arr = initialArray;
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

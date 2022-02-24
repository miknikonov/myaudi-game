export interface DataItemType {
  Abbreviation: string;
  Full: string;
  Explanation: string;
  Link?: string;
}

export interface TileType {
  info: string;
  pairId: number;
  opened: boolean;
  disabled: boolean;
}

export interface IBoardGame {
  name: string;
  img?: string;
  player?: [number] | [number, number] | [number, undefined];
  playTime?: [number] | [number, number];
  plus?: string[];
  isBuy?: boolean;
  order?: number;
  genre?: string[];
}

export interface IFilter {
  player?: number;
  genre?: string[];
  n?: string;
}

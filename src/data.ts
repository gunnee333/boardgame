import { IBoardGame, IFilter } from './data/type';
import { data as initData } from './utils';

class Data {
  private data: IBoardGame[] = [];

  constructor() {
    this.data = initData;
  }

  getList({ player, genre, n }: IFilter) {
    const newList = this.data.filter((item) => {
      let isFiltered = true;
      if ([undefined, null, 'n'].includes(n) && item.isBuy) {
        isFiltered = false;
      } else if (n === 't' && !item.isBuy) {
        isFiltered = false;
      }

      if (typeof player === 'number') {
        const playerFiltered = this.filterPlayerNumber({
          filterNumber: player,
          player: item.player,
        });
        if (!playerFiltered) {
          isFiltered = false;
        }
      }

      if ((genre || []).length > 0) {
        const genreFiltered = this.filterGenre({
          genre: item.genre,
          filterGenre: genre,
        });
        if (!genreFiltered) {
          isFiltered = false;
        }
      }

      return isFiltered;
    });
    return newList;
  }

  getMaxPlayer() {
    const maxPlayer = this.data.reduce((acc, cur) => {
      const player1 = (cur.player || [])[0];
      const player2 = (cur.player || [])[1];

      if (typeof player1 === 'number' && acc < player1) {
        acc = player1;
      }
      if (typeof player2 === 'number' && acc < player2) {
        acc = player2;
      }
      return acc;
    }, 0);
    return maxPlayer;
  }

  getGenreList() {
    const genreList = this.data.reduce((acc, cur) => {
      (cur.genre || []).forEach((_genre) => {
        if (!acc.includes(_genre)) {
          acc.push(_genre);
        }
      });
      return acc;
    }, [] as string[]);
    return genreList;
  }

  private filterPlayerNumber({
    filterNumber,
    player,
  }: {
    filterNumber?: number;
    player?: [number] | [number, number] | [number, undefined] | undefined;
  }) {
    if (typeof filterNumber === 'undefined') {
      return true;
    }
    if (typeof player === 'undefined') {
      return false;
    }
    if (player.length === 1) {
      return filterNumber === player[0];
    } else if (player.length === 2) {
      if (typeof player[1] === 'number') {
        return filterNumber >= player[0] && filterNumber <= player[1];
      } else {
        return filterNumber >= player[0];
      }
    }
    return false;
  }

  private filterGenre({
    genre,
    filterGenre,
  }: {
    genre?: string[];
    filterGenre?: string[];
  }) {
    if (typeof filterGenre === 'undefined' || filterGenre.length === 0) {
      return true;
    }
    if (typeof genre === 'undefined' || genre.length === 0) {
      return false;
    }
    const isFilter =
      genre.filter((_genre) => {
        if (filterGenre.includes(_genre)) {
          return true;
        }
        return false;
      }).length === filterGenre.length;

    return isFilter;
  }
}

export default Data;

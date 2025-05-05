import * as assets from './assets';
const Images = assets.Images;

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
}

const initData: IBoardGame[] = [
  {
    name: '모노폴리',
    img: Images.모노폴리,
    player: [2, 6],
    playTime: [60, 180],
    plus: ['k-확장판'],
    genre: ['패밀리', '전략'],
    isBuy: true,
  },
  {
    name: '클루',
    img: Images.클루,
    player: [2, 6],
    playTime: [45],
    genre: ['추리'],
    isBuy: true,
  },
  {
    name: '루미큐브',
    img: Images.루미큐브,
    player: [2, 4],
    playTime: [20],
    genre: ['추상', '패밀리'],
    isBuy: true,
  },
  {
    name: '스플렌더',
    img: Images.스플렌더,
    player: [2, 6],
    playTime: [30],
    plus: ['찬란한도시'],
    genre: ['전략', '카드'],
    isBuy: true,
  },
  {
    name: '테라포밍마스',
    img: Images.테라포밍마스,
    player: [1, 5],
    playTime: [90, 120],
    plus: ['서곡', '비너스넥스트', '개척기지', '헬라스&엘리시움', '격동'],
    genre: ['전략'],
    isBuy: true,
  },
  {
    name: '쿼리도',
    img: Images.쿼리도,
    player: [2, 4],
    playTime: [15],
    genre: ['추상'],
    isBuy: true,
  },
  {
    name: '장난꾸러기 나방',
    img: Images.장난꾸러기나방,
    player: [3, 5],
    playTime: [15, 30],
    genre: ['손재주', '패밀리'],
    isBuy: true,
  },
  {
    name: '바퀴벌레 포커',
    img: Images.바퀴벌레포커,
    player: [2, 6],
    playTime: [20],
    genre: ['블러핑', '패밀리'],
    isBuy: true,
  },
  {
    name: '다빈치코드',
    img: Images.다빈치코드,
    player: [2, 4],
    playTime: [15],
    genre: ['추리'],
    isBuy: true,
  },
  {
    name: '다빈치캐슬',
    img: Images.다빈치캐슬,
    player: [3, 6],
    playTime: [15],
    genre: ['추리'],
    isBuy: true,
  },
  {
    name: '타르기',
    img: Images.타르기,
    player: [2],
    playTime: [60],
    genre: ['전략'],
    isBuy: true,
  },
  {
    name: '뱅',
    img: Images.뱅,
    player: [4, 7],
    playTime: [20, 40],
    plus: ['확장판모음', '닷지시티', '골드러시'],
    genre: ['블러핑', '카드'],
    isBuy: true,
  },
  {
    name: '퍼레이드',
    img: Images.퍼레이드,
    player: [2, 6],
    playTime: [45],
    genre: ['카드', '전략'],
    isBuy: true,
  },
  {
    name: '컬러레또',
    img: Images.컬러레또,
    player: [2, 5],
    playTime: [30],
    genre: ['카드', '패밀리'],
    isBuy: true,
  },
  {
    name: '세트',
    img: Images.세트,
    player: [1, undefined],
    playTime: [20],
    genre: ['추상', '지능개발'],
    isBuy: true,
  },
  {
    name: '사보타지',
    img: Images.사보타지,
    player: [3, 10],
    playTime: [30],
    genre: ['협력', '전략'],
    isBuy: true,
  },
  {
    name: '위자드',
    img: Images.위자드,
    player: [3, 6],
    playTime: [45],
    genre: ['트릭테이킹', '카드'],
    isBuy: true,
  },
  {
    name: '달무티',
    img: Images.달무티,
    player: [4, 8],
    playTime: [15],
    genre: ['트릭테이킹', '카드'],
    isBuy: true,
  },
  {
    name: '보난자',
    img: Images.보난자,
    player: [3, 5],
    playTime: [45],
    genre: ['카드', '전략'],
    isBuy: true,
  },
  {
    name: '로보77',
    img: Images.로보77,
    player: [2, 8],
    playTime: [30],
    genre: ['카드', '패밀리'],
    isBuy: true,
  },
  {
    name: '젝스님트',
    img: Images.젝스님트,
    player: [2, 10],
    playTime: [20],
    genre: ['카드', '패밀리'],
    isBuy: true,
  },
  {
    name: '참새작',
    img: Images.참새작,
    player: [2, 5],
    playTime: [30],
    genre: ['카드', '패밀리'],
    isBuy: true,
  },
  {
    name: '다이스 베이스볼',
    img: Images.다이스베이스볼,
    player: [2],
    playTime: [20],
    genre: ['주사위', '패밀리'],
    isBuy: true,
  },
  {
    name: '카보',
    img: Images.카보,
    player: [2, 4],
    playTime: [45],
    genre: ['카드', '메모리'],
    isBuy: true,
  },
  {
    name: '쿠',
    img: Images.쿠,
    player: [2, 6],
    playTime: [15],
    genre: ['블러핑', '카드'],
    isBuy: true,
  },
  {
    name: '해저탐험',
    img: Images.해저탐험,
    player: [2, 6],
    playTime: [30],
    genre: ['협력', '전략'],
    isBuy: true,
  },
  {
    name: '타코 햇 케익 기프트 피자',
    img: Images.타코햇케익기프트피자,
    player: [2, 8],
    playTime: [15],
    genre: ['파티', '손재주'],
    isBuy: true,
  },
  {
    name: '엘리베이터앞에서',
    img: Images.엘리베이터앞에서,
    player: [2, 4],
    playTime: [20],
    genre: ['전략', '패밀리'],
    isBuy: true,
  },
  {
    name: '페이퍼사파리',
    img: Images.페이퍼사파리,
    player: [2, 5],
    playTime: [20],
    genre: ['카드', '패밀리'],
    isBuy: true,
  },
  {
    name: '해독제',
    img: Images.해독제,
    player: [2, 7],
    playTime: [20, 30],
    genre: ['협력', '추리'],
    isBuy: true,
  },
  {
    name: '캘리코',
    img: Images.캘리코,
    player: [1, 4],
    playTime: [30, 45],
    genre: ['전략', '패밀리'],
    isBuy: true,
  },
  {
    name: '티켓투라이드 미국',
    img: Images.티켓투라이드_미국,
    player: [2, 5],
    playTime: [30, 60],
    genre: ['전략', '패밀리'],
    isBuy: true,
  },
  {
    name: '티켓투라이드 유럽',
    img: Images.티켓투라이드_유럽,
    player: [2, 5],
    playTime: [40, 60],
    genre: ['전략', '패밀리'],
    isBuy: true,
  },
  {
    name: '초밥왕',
    img: Images.초밥왕,
    player: [2, 5],
    playTime: [10, 15],
    genre: ['카드', '패밀리'],
    isBuy: true,
  },
  {
    name: '러브레터',
    img: Images.러브레터,
    player: [2, 4],
    playTime: [30],
    genre: ['블러핑', '카드'],
    isBuy: true,
  },
  {
    name: '도망자',
    img: Images.도망자,
    player: [2],
    playTime: [20],
    genre: ['추리', '카드'],
    isBuy: true,
  },
  {
    name: '번레이트',
    img: Images.번레이트,
    player: [2, 4],
    playTime: [30],
    genre: ['전략', '카드'],
    isBuy: true,
  },
  {
    name: '라스베가스',
    img: Images.라스베가스,
    player: [2, 5],
    playTime: [30],
    genre: ['주사위', '패밀리'],
    isBuy: true,
  },
  {
    name: '렉시오 플러스',
    img: Images.렉시오,
    player: [3, 5],
    playTime: [20],
    genre: ['카드', '전략'],
    isBuy: true,
  },
  {
    name: '노땡스',
    img: Images.노땡스,
    player: [3, 7],
    playTime: [20],
    genre: ['카드', '전략'],
    isBuy: true,
  },
  {
    name: '라마',
    img: Images.라마,
    player: [2, 6],
    playTime: [20],
    genre: ['카드', '패밀리'],
    isBuy: true,
  },
  {
    name: '달콤보',
    img: Images.달콤보,
    player: [2, 4],
    playTime: [20],
    genre: ['카드', '패밀리'],
    isBuy: true,
  },
  {
    name: '별빛 커피 은하수 다방',
    img: Images.별빛커피,
    player: [2, 4],
    playTime: [40],
    genre: ['전략', '패밀리'],
    isBuy: true,
  },
  {
    name: '꼬치의달인',
    img: Images.꼬치의달인,
    player: [2, 6],
    playTime: [20],
    plus: ['그랜드마스터(~6인)'],
    genre: ['손재주', '파티'],
    isBuy: true,
  },
  {
    name: '센추리: 향신료의 길',
    img: Images.센추리,
    player: [2, 5],
    playTime: [30, 45],
    genre: ['전략', '카드'],
    isBuy: true,
  },
  {
    name: '달빛 아래에서 수를',
    img: Images.달빛아래에서수를,
    player: [2],
    playTime: [20],
    genre: ['전략', '추상'],
    isBuy: true,
  },
  {
    name: '스파이폴2',
    img: Images.스파이폴2,
    player: [3, 12],
    playTime: [15],
    genre: ['블러핑', '추리'],
    isBuy: true,
  },
  {
    name: '요트다이스',
    img: Images.요트다이스,
    player: [1, undefined],
    playTime: [30],
    genre: ['주사위', '패밀리'],
    isBuy: true,
  },
  {
    name: '티츄',
    img: Images.티츄,
    player: [4],
    playTime: [60],
    genre: ['트릭테이킹', '카드'],
    isBuy: false,
  },
  {
    name: '마법사의레시피',
    img: Images.마법사의레시피,
    player: [2, 4],
    playTime: [30],
    genre: ['전략', '패밀리'],
    isBuy: false,
  },
  {
    name: '크라스 카리어트',
    img: Images.크라스카리어트,
    player: [3, 5],
    playTime: [30],
    genre: ['전략', '카드'],
    isBuy: false,
  },
  {
    name: '서펜티나',
    img: Images.서펜티나,
    player: [2, 4],
    playTime: [15],
    genre: ['패밀리', '추상'],
    isBuy: false,
  },
  {
    name: '카탄',
    img: Images.카탄,
    player: [3, 4],
    playTime: [75],
    genre: ['전략', '패밀리'],
    isBuy: false,
  },
  {
    name: '머핀타임',
    img: Images.머핀타임,
    player: [2, 6],
    playTime: [20, 40],
    genre: ['파티', '블러핑', '카드'],
    isBuy: false,
  },
  {
    name: '펭귄파티',
    img: Images.펭귄파티,
    player: [2, 6],
    playTime: [30],
    plus: ['도시와 기사', '항해사', '탐험과와 해적', '상인과 야만인'],
    genre: ['패밀리', '카드'],
    isBuy: false,
  },
  {
    name: '독수리눈치싸움',
    img: Images.독수리눈치싸움,
    player: [2, 5],
    playTime: [20],
    genre: ['지능개발', '패밀리'],
    isBuy: false,
  },
  {
    name: '몰타의 관문',
    img: Images.몰타의관문,
    player: [2, 5],
    playTime: [45],
    genre: ['전략', '추상'],
    isBuy: false,
  },
  {
    name: '아줄',
    img: Images.아줄,
    player: [2, 4],
    playTime: [30, 45],
    genre: ['전략', '추상'],
    isBuy: false,
  },
];

class Data {
  private data: IBoardGame[] = [];

  constructor() {
    this.data = initData;
  }

  getList({ player, genre }: IFilter) {
    const newList = this.data.filter((item) => {
      let isFiltered = true;
      if (!item.isBuy) {
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

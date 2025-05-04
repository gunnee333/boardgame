import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import './App.css';
import { data, IBoardGame } from './data';

const buyData = data.filter((item) => item.isBuy);
const maxPlayer = data.reduce((acc, cur) => {
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

function App() {
  const [listData, setListData] = useState<IBoardGame[]>(buyData);
  const [filter, setFilter] = useState<{ player?: number }>({});

  useEffect(() => {
    const newListData = buyData.filter((item) => {
      let isFiltered = true;
      if (typeof filter.player === 'number') {
        isFiltered = filterPlayerNumber({
          filterNumber: filter.player,
          player: item.player,
        });
      }

      return isFiltered;
    });
    console.log(filter, newListData);
    setListData(newListData);
  }, [filter]);

  return (
    <div className="wrap">
      <div className="searchContainer">
        <div className="radioContainer">
          {[...new Array(maxPlayer)].map((_, index) => {
            const isChecked = filter.player === index + 1;
            return (
              <div
                key={index}
                className={['radioBox', isChecked ? 'checked' : ''].join(' ')}
                onClick={() => {
                  if (!isChecked) {
                    setFilter({ ...filter, player: index + 1 });
                  } else {
                    setFilter({ ...filter, player: undefined });
                  }
                }}
              >
                {index + 1}명
              </div>
            );
          })}
        </div>
      </div>
      <div className="listContainer">
        {listData.map((item) => {
          return (
            <div className="item" key={_.uniqueId()}>
              <div className="imgContainer">
                {!!item.img && <img src={item.img} />}
              </div>
              <div className="textContainer">
                <h3>{item.name}</h3>
                <div className="textRow">
                  <span>
                    {formatPlayText({ array: item.player, tailText: '명' })}
                  </span>
                  <span>
                    {formatPlayText({ array: item.playTime, tailText: '분' })}
                  </span>
                </div>
                {(item.plus || []).length > 0 && (
                  <div className="textRow">
                    <h4>확장판</h4>
                    <ul>
                      {(item.plus || []).map((plusItem, j) => (
                        <li key={j}>{plusItem}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function formatPlayText({
  array,
  tailText,
}: {
  array: [number] | [number, number] | [number, undefined] | undefined;
  tailText?: string;
}) {
  if (typeof array === 'undefined') {
    return '';
  }
  if (array.length === 1) {
    return `${array[0]}${tailText}`;
  } else if (array.length === 2) {
    if (typeof array[1] === 'number') {
      return `${array[0]}-${array[1]}${tailText}`;
    } else {
      return `${array[0]}${tailText} 이상`;
    }
  }
}

function filterPlayerNumber({
  filterNumber,
  player,
}: {
  filterNumber: number;
  player: [number] | [number, number] | [number, undefined] | undefined;
}) {
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

export default App;

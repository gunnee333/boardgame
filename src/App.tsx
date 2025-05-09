import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import './App.css';
import Data from './data';
import { Svgs } from './assets';
import { IBoardGame, IFilter } from './data/type';
import { useNav } from './hook';

const boardGameList = new Data();
const maxPlayer = boardGameList.getMaxPlayer();
const genreList = boardGameList.getGenreList();

function App() {
  const { getParams } = useNav();
  const { n } = getParams<{ n: string }>();
  const [listData, setListData] = useState<IBoardGame[]>([]);
  const [filter, setFilter] = useState<IFilter>({ n });
  const [filterToggle, setFilterToggle] = useState<{
    player?: boolean;
    genre?: boolean;
  }>({ player: true, genre: true });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newListData = boardGameList.getList(filter);
    scrollRef.current?.scrollTo({ top: 0 });
    setListData(newListData);
  }, [filter]);

  return (
    <div className="wrap">
      <div className="searchContainer">
        <div className={`searchItem ${filterToggle.player ? 'on' : 'off'}`}>
          <div
            className="searchTitle"
            onClick={() =>
              setFilterToggle({ ...filterToggle, player: !filterToggle.player })
            }
          >
            <span>명수</span>
            <div className="icon">
              <img src={Svgs.arrow} />
            </div>
          </div>
          <div className="radioContainer">
            {[...new Array(maxPlayer)].map((_, index) => {
              const isChecked = filter.player === index + 1;
              return (
                <div
                  key={index}
                  className={`radioBox ${isChecked ? 'checked' : ''}`}
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
        <div className={`searchItem ${filterToggle.genre ? 'on' : 'off'}`}>
          <div
            className="searchTitle"
            onClick={() =>
              setFilterToggle({ ...filterToggle, genre: !filterToggle.genre })
            }
          >
            <span>장르</span>
            <div className="icon">
              <img src={Svgs.arrow} />
            </div>
          </div>
          <div className="radioContainer">
            {genreList.map((genre, index) => {
              const isChecked = !!(filter.genre || []).find(
                (selected) => selected === genre,
              );
              return (
                <div
                  key={index}
                  className={`radioBox ${isChecked ? 'checked' : ''}`}
                  onClick={() => {
                    if (!isChecked) {
                      setFilter({
                        ...filter,
                        genre: [...(filter.genre || []), genre],
                      });
                    } else {
                      setFilter({
                        ...filter,
                        genre: (filter.genre || []).filter((selected) =>
                          selected === genre ? false : true,
                        ),
                      });
                    }
                  }}
                >
                  {genre}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div ref={scrollRef} className="listContainer">
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
                {(item.genre || []).length > 0 && (
                  <div className="textRow">
                    <h4>장르</h4>
                    <div>{(item.genre || []).join(', ')}</div>
                  </div>
                )}
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

export default App;

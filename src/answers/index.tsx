import { observer } from "mobx-react-lite";
import React, { useContext, useState } from 'react';
import style from './index.module.css';
import {Popover, PopoverBody, PopoverTrigger, Text} from '@audi/audi-ui-react';
import { StoreContext } from "../store";

export const Answers = observer(() => {
  const store = useContext(StoreContext);
  console.log('render');
  return (
    <div className={style["answer-wrapper"]}>
      {store.guessedItems.map((item, index) => {
        return (
          <Text
              className={`${style.answer} ${item && style.guessed}`}
              key={index}
              variant={"order4"}
              weight={"bold"}
              spaceStackEnd={"xxs"}
          >
            {index+1}
            {item && <>
              <Text
                spaceInlineStart="xs"
                variant={"order4"}
                as={"span"}
              >
                {item.Abbreviation}
              </Text>
              <div className={style["description-wrapper"]}>
                <Text variant={"copy1"}>{item.Explanation}</Text>
              </div>
              </>
            }
          </Text>
        )
      }
      )}
    </div>
  )
});


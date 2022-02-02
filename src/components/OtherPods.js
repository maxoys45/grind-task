import React from 'react';
import copy from '../locales/en.default';
import { ListItem } from './ListItem';

export const OtherPods = () => {
  const items = [];
  
  for (let i = 0; i < copy.others.items.length; i++) {
    items.push(
      <ListItem
        title={copy.others.items[i].title}
        subtitle={copy.others.items[i].subtitle}
        positive={false}
        key={i}
      />
    );
  }

  return (
    <div class="why-grind__others grind-table">
      <h3 class="grind-table__title grind-table__title--others">{ copy.others.title }</h3>

      <ul class="grind-table__list">
        {items}
      </ul>
    </div>
  );
};

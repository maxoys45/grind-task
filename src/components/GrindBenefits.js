import React from 'react';
import copy from '../locales/en.default';
import { ListItem } from './ListItem';

import HandHoldingPods from "../img/GrindPods.png";

export const GrindBenefits = () => {
  const items = [];
  
  for (let i = 0; i < copy.benefits.items.length; i++) {
    items.push(
      <ListItem
        title={copy.benefits.items[i].title}
        subtitle={copy.benefits.items[i].subtitle}
        positive={true}
        key={i}
      />
    );
  }

  return (
    <div class="why-grind__benefits grind-table">
      <h3 class="grind-table__title grind-table__title--benefits">{ copy.benefits.title }</h3>

      <div>
        <span class="grind-table__clip-path"></span>

        <ul class="grind-table__list">
          {items}
        </ul>
      </div>

      <a class="why-grind__cta" href={ copy.benefits.cta_link }>{ copy.benefits.cta_text }</a>

      <img class="why-grind__hand-img" src={HandHoldingPods} alt="hand holding grind coffee pods" />
    </div>
  );
};

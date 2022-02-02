import React from 'react';

export const ListItem = ({ title, subtitle, positive }) => {
  const iconClass = positive ? "grind-item__tick" : "grind-item__cross"

  return (
    <li class="grind-table__item grind-item">
      <span class={iconClass}></span>

      <h4 class="grind-item__title">{ title }</h4>

      {subtitle.length > 0 &&
        <span class="grind-item__desc">{ subtitle }</span>
      }
    </li>
  );
};

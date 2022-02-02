import React from 'react';
import copy from '../locales/en.default';
import { GrindBenefits } from './GrindBenefits';
import { OtherPods } from './OtherPods';

import "../scss/why-grind-pods.scss";

export const WhyGrindPods = () => {
  return (
    <section class="why-grind">
      <div class="why-grind__copy">
        <div class="why-grind__copy-inner">
          <h2 class="why-grind__title">{ copy.section_title }</h2>

          <p class="why-grind__intro">{ copy.section_intro }</p>
        </div>
      </div>

      <div class="why-grind__tables">
        <GrindBenefits />

        <OtherPods />
      </div>
    </section>
  );
};

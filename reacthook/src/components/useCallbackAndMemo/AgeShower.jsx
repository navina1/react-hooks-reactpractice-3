import React from 'react';
import { memo } from 'react';
import BorderComponent from '../HigherOrderComponent/BorderComponent';

function AgeShower({name,age}) {
    console.log("Age shower", name, age);
    return (
      <BorderComponent>
        <h2>Name - {name}</h2>
        <h3> Age - {age}</h3>
      </BorderComponent>
    );
}

export default memo(AgeShower)
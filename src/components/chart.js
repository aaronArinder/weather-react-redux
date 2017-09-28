import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = props => {
  const averagedNumber =
    props.data.reduce((sum, number) => {
      return (sum += number);
    }) / props.data.length;
  //the weather API returns kelvin, the below converts to F
  if (props.units === 'F') {
    return Math.round(averagedNumber * 9 / 5 - 459.67);
  } else {
    return Math.round(averagedNumber);
  }
};

export default props => {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props)} {props.units}
      </div>
    </div>
  );
};

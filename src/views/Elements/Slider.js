import React from 'react';
import Slider from 'material-ui/Slider';

const SliderExampleSimple = (props) => (
    <Slider
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          onChange={props.onChange}
        />
);

export default SliderExampleSimple;
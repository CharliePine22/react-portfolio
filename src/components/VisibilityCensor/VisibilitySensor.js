import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const VisibilitySensorImage = () => {
  const [visibility, setVisibility] = useState(false);

    return (
      <VisibilitySensor
        onChange={(isVisible) => {
          setVisibility(isVisible)
        }}
      >
        <img
          alt={props.alt}
          src={props.src}
          style={{
            display: 'block',
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
            opacity: visibility ? 1 : 0.25,
            transition: 'opacity 500ms linear'
          }}
        />
      </VisibilitySensor>
    );
}

export default VisibilitySensorImage;
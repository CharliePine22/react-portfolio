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
          alt={this.props.alt}
          src={this.props.src}
          style={{
            display: 'block',
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
            opacity: this.state.visibility ? 1 : 0.25,
            transition: 'opacity 500ms linear'
          }}
        />
      </VisibilitySensor>
    );
}

export default VisibilitySensorImage;
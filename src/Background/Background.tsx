import * as React from 'react';
import * as Trianglify from 'trianglify';
import glamorous from 'glamorous';

// interface BackgroundProps {
//   cellSize;
//   xColors;
//   yColors;
// }

const BackgroundCanvas = glamorous.canvas({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: -1,
  height: '100vh',
  width: '100vw',
});

class TriangleCanvas extends React.Component {
  componentDidMount() {
    this.renderCanvas();
  }

  renderCanvas() {
    const pattern = Trianglify({ x_colors: 'Spectral' });
    pattern.canvas(document.getElementById('background'));
  }

  render() {
    return <BackgroundCanvas id="background" />;
  }
}

export default TriangleCanvas;

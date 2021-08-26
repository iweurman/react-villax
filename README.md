# react-villax

[react-paralax](https://github.com/rrutsche/react-parallax#readme) with background video support.

## Install

```sh
npm install
```

### [Demo on codesandbox](https://codesandbox.io/embed/thirsty-matan-wrwss?view=preview)

## Usage examples

### Basic - background video

```javascript
import { Parallax } from 'react-villax';

const Container = () => (
    <Parallax blur={10} bgVideo="path/to/video.mp4" strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);
```

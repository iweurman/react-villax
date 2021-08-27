# react-villax

React Parallax with background video support.

This is originally forked from [react-parallax](https://github.com/rrutsche/react-parallax#readme).

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

## Optional props to use

-   bgVideoStyle - optional styles
-   bgVideoType - 'video/mp4' or 'video/webm' or 'video/ogg' - default = 'video/mp4'
-   muted - boolean - default = true
-   autoPlay - boolean - default = true
-   loop - boolean - default = true

### Example

```javascript
import { Parallax } from 'react-villax';

const Container = () => (
    <Parallax
        bgVideo="path/to/video.mp4"
        muted={false}
        loop={false}
        bgVideoStyle={{
            opacity: 0.6,
        }}
    >
        Content goes here. Parallax height grows with content height.
    </Parallax>
);
```

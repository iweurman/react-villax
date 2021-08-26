# react-medialax [![NPM version][npm-image]][npm-url]

### This repo is originally forked from react-paralax with added support to play video's

## Install

```sh
npm install
```

### [Demo on codesandbox](https://codesandbox.io/embed/r0yEkozrw?view=preview)

## Usage examples

### Basic - background video
```javascript
import { Parallax } from 'react-medialax';

const Container = () => (
    <Parallax blur={10} bgVideo="path/to/video.mp4" strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);
```

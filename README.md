# 27MHz

📻 Get the frequency in Hz for a given channel on [the general use 27
MHz band](http://www.ukrcc.org/27mhz.html).

[![Build status](https://travis-ci.org/watson/27mhz.svg?branch=master)](https://travis-ci.org/watson/27mhz)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install 27mhz --save
```

## Usage

```js
var channel = require('27mhz')

console.log('The frequency for channel 19 is:', channel(19)) // 27145000
```

## API

### `var hz = channel(n)`

Given a channel `n` between 1 and 32, this function will return its
frequency in Hz.

## License

MIT

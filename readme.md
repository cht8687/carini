# carini [![Build Status](https://travis-ci.org/cht8687/carini.svg?branch=master)](https://travis-ci.org/cht8687/carini)

> Yeah thats what i do... clean the garbage

## Install

```
$ npm install --save carini
```

## Usage

```js

const carini = require('carini');

const yourString1 = 'examle???string.@@!!';

const result = carini(yourString1, ['?','@','.','!']);

console.log(result);
//=> 'examlestring'

const yourString2 = '% % %t e s t$ $ $ ';

const result = carini(yourString2, ['%t',' ', '%', '$', 't']);

console.log(result);
//=> 'es'

```
## API

### carini(str, [options])

#### str

Type: `string`

String which need to be processed.

#### options

Type: `array`<br>


Elements need to be removed.

## License

MIT © [haotian Chang](https://github.com/cht8687)

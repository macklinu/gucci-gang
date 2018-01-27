# gucci-gang

> Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang, Gucci gang

[![npm](https://img.shields.io/npm/v/gucci-gang.svg)](https://npm.im/gucci-gang)
[![Build Status](https://travis-ci.org/macklinu/gucci-gang.svg?branch=master)](https://travis-ci.org/macklinu/gucci-gang)
[![license](https://img.shields.io/github/license/macklinu/gucci-gang.svg)](https://github.com/macklinu/gucci-gang/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

```
npm install gucci-gang
```

<small>Not sure why you would ever install this though.</small>

## Usage

The simplest way to use this package is to use the CLI:

```sh
$ npx gucci-gang
```

This will print an ASCII art picture of [Lil Pump](https://twitter.com/lilpump) to your terminal, like so:

![](./screenshots/gucci-gang.png)

You can alternatively use the programmatic API:

```js
import gucciGang from 'gucci-gang'

gucciGang()
  .then(text => console.log(text))
  .catch(err => console.error(err))
```

#!/usr/bin/env node

// @flow

/* eslint-disable no-console */

import size from 'window-size'
import gucciGang from '.'

const { width, height } = size.get()

gucciGang({ width, height })
  .then(console.log)
  .catch(console.error)

# react-amplitude
### React Amplitude Analytics

[![npm version](https://img.shields.io/npm/v/react-amplitude.svg?style=flat-square)](https://www.npmjs.com/package/react-amplitude)
[![npm downloads](https://img.shields.io/npm/dm/react-amplitude.svg?style=flat-square)](https://www.npmjs.com/package/react-amplitude)

This is a JavaScript module that can be used to include Amplitude Analytics tracking code in a website or app that uses [React](https://facebook.github.io/react/) for its front-end codebase.

Feel free to file [issues, ideas and pull requests against this repo](https://github.com/react-amplitude/react-amplitude/issues).

## Installation

With [yarn](https://yarnpkg.com/en/docs/getting-started//):
```bash
yarn add react-amplitude
```

With [npm](https://www.npmjs.com/):
```bash
npm install react-amplitude --save
```

## Usage

Initializing:

```js
import React from 'react';
import ReactDOM from 'react-dom';

...
import Amplitude from 'react-amplitude';
Amplitude.initialize('YOUR_UNIQUE_TRACKING_CODE');
...

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'));
});

```

## API

#### Amplitude.initialize(amplitudeTrackingCode)

Must be initialized using this function before any of the other tracking functions will record any data.

###### Example

```js
Amplitude.initialize('YOUR_UNIQUE_TRACKING_CODE');
```

|Value|Notes|
|------|-----|
|gaTrackingID| `String`. Required.|

#### Amplitude.event(eventName)

Log an event to Amplitude.

###### Example

```js
Amplitude.event('EVENT_NAME_TO_BE_LOGGED', eventProperties);
```

|Value|Notes|
|------|-----|
|eventName| `String`. Required.|
|eventProperties| `Object`. Optional.|

#### Amplitude.resetUserId()

Remove user tracking (e.g. on logging out).

###### Example

```js
Amplitude.resetUserId();
```

#### Amplitude.setUserId(userId)

Track users through a unique user id.

###### Example

```js
Amplitude.setUserId(userId);
```

|Value|Notes|
|------|-----|
|userId| `String`. Required.|

#### Amplitude.setUserProperties(userProps)

Track user properties

###### Example

```js
Amplitude.setUserProperties(userProps);
```

|Value|Notes|
|------|-----|
|userProps| `object`. Required.|


## Development

```bash
git clone https://github.com/rorygarand/react-amplitude.git
yarn install
npm run build
```

#### Acknowledgements

* [react-ga](https://github.com/react-ga/react-ga).

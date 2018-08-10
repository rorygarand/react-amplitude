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
Amplitude.init('YOUR_UNIQUE_TRACKING_CODE');
...

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'));
});

```

## API

#### Amplitude.init(apiKey, userId, config, callback)

Must be initialized using this function before any of the other tracking functions will record any data.

###### Example

```js
Amplitude.init(apiKey, userId, config, cb);
```

|Value|Notes|
|------|-----|
|apiKey| `String`. Required.|
|userId| `String`. Optional.|
|config| `Object`. Optional.|
|callback| `Function`. Optional.|

#### Amplitude.logEvent(eventName, eventProperties, callback)

Log an event to Amplitude.

###### Example

```js
Amplitude.logEvent(eventName, eventProperties, cb);
```

|Value|Notes|
|------|-----|
|eventName| `String`. Required.|
|eventProperties| `Object`. Optional.|
|callback| `Function`. Optional.|

#### Amplitude.logEventWithTimestamp(eventName, eventProperties, timestamp, callback)

Log an event to Amplitude.

###### Example

```js
Amplitude.logEventWithTimestamp(eventName, eventProperties, timestamp, cb);
```

|Value|Notes|
|------|-----|
|eventName| `String`. Required.|
|eventProperties| `Object`. Optional.|
|timestamp| `Number`. Optional.|
|callback| `Function`. Optional.|

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

#### Amplitude.clearUserProperties()

Clear user properties
(careful, this is irreversible!)

###### Example

```js
Amplitude.clearUserProperties();
```

#### Amplitude.getSessionId()

Returns current session id

###### Example

```js
Amplitude.getSessionId();
```

#### Amplitude.identify(idObj, callback)

Send an identify call containing user property operations to Amplitude servers

###### Example

```js
Amplitude.identify(idObj, cb);
```

|Value|Notes|
|------|-----|
|idObj| `object`. Required.|
|callback| `Function`. Optional.|

#### Amplitude.isNewSession()

Returns if a new session was created at init

###### Example

```js
Amplitude.isNewSession();
```


## Development

```bash
git clone https://github.com/rorygarand/react-amplitude.git
yarn install
npm run build
```

#### Acknowledgements

* [react-ga](https://github.com/react-ga/react-ga)

#### Contributors

* [chasedut](https://github.com/chasedut)
* [emilioastarita](https://github.com/emilioastarita)
* [lol-russo](https://github.com/lol-russo)
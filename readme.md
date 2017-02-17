# Ionic2 Firebase Auth

A basic example of facebook Auth with firebase and ionic 2

## Getting Started

These instructions will obtain a copy of the project running on the local machine for the purpose of exemplifying the development of login with, firebase/facebook and ionic2.

### Prerequisites
* [firebase project](https://console.firebase.google.com/)
* [Facebook Application](https://developers.facebook.com/)

The first step is to ensure you've latest version of **Node** installed.
You can get the latest version from [here](https://nodejs.org).
This will install both node and npm.

After installing node, check the version by executing the following command in your prompt window.

```bash

$ node -v
// v6.9.1

```

As of writting this document, this is the most stable version. If you're not on this version,
please upgrade yourself to latest version by installing node from [here](https://nodejs.org).

Check your npm version by executing the following command.

```bash

$ npm -v
// 4.1.2

```

**_Your Application code sits on top of Ionic Framework and the Ionic Framework sits on top of Cordova._**

Let's get them installed globally, so that all projects can use them.

Execute the following commands.

```bash

$ npm install -g cordova

$ npm install -g ionic

```

Once the above commands are executed successfully, Check the versions of corodva and ionic by executing the following commands.

```bash

$ cordova -v
7.5.0

$ ionic -v
2.1.8


```

### Installing


* After cloning this repository you should follow the steps

Install dependences of node

```
npm install
```

Config you firebase config object.

This object must be configured in the firebase.config.js file located at:
Src /

``` javascript

// src/firebase.config.js
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
```

Serve you Application

```
ionic serve
```

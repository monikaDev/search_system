# react-native

React Native Repo for Auto suggestion search box

## Installing

First clone the repo to your desired directory.

```sh
$ git clone https://github.com/monikaDev/search_system.git
```

Once that has completed you will need to install required dependencies.

```sh
$ yarn install
```

And finally install the iOS dependencies.

```sh
$ cd ios && pod install
```

---

## Building Android

Android builds require that the Android SDK is installed. Run `yarn android` to start the project.

In the case of build issues on Android, try these commands:

```sh
$ cd android && .\gradlew clean

$ cd .. && yarn android
```

---

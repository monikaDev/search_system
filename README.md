# Auto suggestion search box

React Native Repo for Auto suggestion search box

## Installing

First clone the repo to your desired directory.

```sh
$ git clone https://github.com/monikaDev/search_system.git
$ cd search_system
$ git checkout feature/search-widget
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

## Project Structure

Using component structure. Which is easy to understand and access the files.

`api`: This directory contains all the api stuff in separate file. Currently, It's having `search.js` for mock search API.
`components`: This directory contains all the components like `SearchBox`, `List` etc. The sub-directory contain small components.
`hooks`: This directory contains custom hooks. Currently, it's containing `useDebounce` custom hook
`utilities`: This directory contains all the common function that used in the application like for validation, constant.
`assets`: This directory contains the icons (We can add fonts as well)

## Component Used

StatusBar : A reusable component for StatusBar having props `textColor`, `backgroundColor`. It's having light theme by default. We can use it as per requirement.
SearchBox : A reusable component for searching. It can be user at other places as well, as in this we can update placeholder text, handle focusing of input field and get the event onChangeText.
List: A reusable component for displaying list data and handling it. To make it more customise, we can add section list parameter as well.
useDebounce: It is a custom hook to give debounce effect.

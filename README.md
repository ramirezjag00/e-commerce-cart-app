# [Cart](https://drive.google.com/file/d/1X8etGyq_zuNFyngVsuzC8zuCkGh7c31S)
> Simple Cart App using React-Native + TypeScript

## Setup Instructions
1. Setup react-native environment. read more [here](https://reactnative.dev/docs/environment-setup)
2. Clone the repository
  - `git@github.com:ramirezjag00/cart.git`
3. Install dependencies
  - `cd [project_directory]` && `npm install`
4. Run project

## Run
  #### Android
  Needs emulator, install [Android Studio](https://developer.android.com/studio)
  1. Open emulator from Android Studio
  3. Run react-native: `react-native run-android`
  #### IOS
  1. Download `Xcode` from app store
  2. Install the pods: `cd [project_directory]/ios && pod install`
  3. Run react-native: `react-native run-ios`

## Clean and Run

#### Android
> reinstall packages, clean android, pod install ios, run in android
```
rm -rf package-lock.json && npm i && cd android && ./gradlew clean && cd .. && cd ios && pod install && cd .. && react-native run-android
```

#### iOS
> reinstall packages, clean android, pod install ios, run in ios
```
rm -rf package-lock.json && npm i && cd android && ./gradlew clean && cd .. && cd ios && pod install && cd .. && react-native run-ios
```

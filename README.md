# git-hub-users

## About this App


The APP consumes data from the [GitHub API](https://developer.github.com/v3/). 


The app displays the list of all users and details from the each user, including a list of his repositories.

I have provided [a video](https://1drv.ms/u/s!Apld_UHHLn7Cgv9FLmg979JrY4jxqw?e=g3zHgc) regarding the app and all the possible functionalities.


To develop this app it was used some external libs:
- [react-navigation](https://reactnavigation.org/docs/en/4.x/getting-started.html)
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) For Image fetching and image caching
- [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view)
- [react-native-elements](https://react-native-elements.github.io/react-native-elements/) As a UI kit library
- [axios](https://github.com/axios/axios) As the network library
- [redux](https://redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk) for the side effects


For the type check I used **type-script**, it was the first time using it.
I followed the redux pattern with redux-thunk for the data and api calls for one screen, the other i applied the component state with hooks and API calls. 
The mobile pattern used was MVC.

**In the future** 
- I want to have the user detail screen with hooks and redux, if i have time.
- Add more types with typescrpt
- Create filters for the results ( sort & direction via API ) 
- Parse the API rsponse in order to only get what i want and appy type checking to it.
- Improve the design for the repositories list screen.
- Organize and refactor code.
 

## Before starting
I assume you have a MAC setted up with npm, react native, xcode, android studio... If not, i leave here this article to follow some [steps in order to have a react-native environment](https://nandovieira.com/setting-up-react-native-on-macos-mojave).

## Getting started

After you getting the project on your MAC you need to follow some steps in order to make it running.

#### Install Dependencies
With your terminal execute the following command on the project root.

`$ npm install`

#### Set up Android

`$ cd android/`

Create a file named local.properties and add your android SDK path. 
Below i show my file with my location.

```
## This file must NOT be checked into Version Control Systems,
# as it contains information specific to your local configuration.
#
# Location of the SDK. This is only used by Gradle.
# For customization when using a Version Control System, please read the
# header note.
#Thu Jul 11 12:33:58 WEST 2019

sdk.dir=/Users/tiagofreitas/Library/Android/sdk

```
Go back to the root folder.

### Running on Android
You can run directly on a device or on the android emulator. 
For the emulator, i recommend you to first open it and then execute the command.

`react-native run-android`

### Set UP iOS
`cd /ios`

`pod install`

`cd ..`

### Running on iOS
You can type the following command on your terminal and it will open an iOS emulator with the app installed. Or you can just open the findMyHotel.xcworkspace file with xCode and execute it.

`react-native run-ios`


### End

I hope you enjoyed the way i developed this app.
  

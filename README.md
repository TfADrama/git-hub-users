# git-hub-users

## About 'Find my hotel'


The APP consumes data from the GitHub API. 


The app displays the list of all users and details from the each user, including a list of his repositories.

I have provided [a video]() regarding the app and all the possible functionalities.


To develop this app it was used some external libs:
- [react-navigation](https://reactnavigation.org/docs/en/4.x/getting-started.html);
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image);


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
  

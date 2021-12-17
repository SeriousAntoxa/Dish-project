// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAAXjVzik_ft1fklVzJrcJajuOJ8jbcuAo",
    authDomain: "dishapp-users.firebaseapp.com",
    databaseURL: "https://dishapp-users-default-rtdb.firebaseio.com",
    projectId: "dishapp-users",
    storageBucket: "dishapp-users.appspot.com",
    messagingSenderId: "83749424192",
    appId: "1:83749424192:web:506ef4650557e99a74a3a5",
    measurementId: "G-7L3TE4W562"
  },
  database: 'firebase',
  socialAuthEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


import firebase from "firebase";
// const prodConfig = {
//     apiKey: process.env.REACT_APP_PROD_API_KEY,
//     authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROD_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_PROD_appId
// };

const devConfig = {
apiKey: process.env.REACT_APP_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN,
databaseURL: process.env.REACT_APP_DATABASE_URL,
projectId: process.env.REACT_APP_PROJECT_ID,
storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
appId: process.env.REACT_appId
};

var config;

// config = (process.env.NODE_ENV === 'prod') ? prodConfig : devConfig;
// console.log(devConfig.authDomain);
console.log(devConfig)
const app = firebase.initializeApp(devConfig);

export default app;
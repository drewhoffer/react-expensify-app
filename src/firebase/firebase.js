import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};


// database.ref('expenses').on('child_removed', (snapshot) => {
    
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
    
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
    
//     console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     })
// //     console.log(expenses)
// // })

// // database.ref('expenses').push({
// //     description: 'Gum',
// //     note:"",
// //     amount: 195,
// //     createdAt: 0
// // })

// // const notes = [{
// //     id: '12',
// //     title: 'First note!',
// //     body: 'This is my note'
// // }, {
// //     id: 'adfg2',
// //     title: 'Another note!',
// //     body: 'This is my note'
// // }];

// // database.ref('notes').push({
// //     title: 'Course topics',
// //     body: 'React native, angular, python'
// // });

// // database.ref().on('value', (snapshot) => {
// //     const {name, job: { title, company}} = snapshot.val()
// //     console.log(`${name} is a ${title} at ${company}`)
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // })

// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val)
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e);
// //     });


// // database.ref().set({
// //     name: "Drew",
// //     age: 23,
// //     stressLevel: 6,
// //     job: {
// //         title: "Software Developer",
// //         company: "Google"
// //     },
// //     location: {
// //         city: "Waterloo",
// //         country: "Canada"
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log(e);
// // });


// // database.ref().update({
// //     'job/company' : "Amazon",
// //     stressLevel: 9,
// //     'location/city': "Seattle"
// // });

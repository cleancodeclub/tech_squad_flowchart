import express from 'express'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from './config.js';

// firebase config
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// express setup
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json)
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to tech squad')
})

// app.get('/test', async (req, res) => {
//   // const querySnapshot = await getDocs(collection(db, "test"));
//   // querySnapshot.forEach((doc) => {
//   //   console.log(`${doc.id} => ${doc.data().text}`);
//   // });
//   // res.send(doc)
// })
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})





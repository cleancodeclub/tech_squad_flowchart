import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from '../config.js';
export const dataRouter = express.Router()

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

dataRouter.get('/', async (req, res) => {
    const querySnapshot = await getDocs(collection(db, "test"));
    const documents = querySnapshot.docs
    const docsCopy = documents.map((doc) => {
      // test logs
      console.log(`${doc.id} => ${doc.data().text}`);
      console.log(doc.data())
      return doc.data()
    });
    res.send(docsCopy)
  })


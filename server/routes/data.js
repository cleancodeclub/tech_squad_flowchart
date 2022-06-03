import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore/lite';
import { firebaseConfig } from '../config.js';
export const dataRouter = express.Router()

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'test')

// get all documents
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

// get a single document
dataRouter.get('/:id', async (req, res) => {
  const docRef = doc(db, 'test', req.params.id)
  getDoc(docRef)
    .then((doc) => {
      res.send(doc.data());
    })
    .catch((err) => {
      console.log(err)
    })
  })

// [TODO Shaun] add a document
dataRouter.post('/', (req, res) => {
  // implement functionality
})

// [TODO Elijah] delete a document
dataRouter.post('/:id', (req, res) => {
  // implement functionality
})

// [TODO Ricardo] update a document
dataRouter.patch('/:id', (req, res) => {
  // implement functionality
})

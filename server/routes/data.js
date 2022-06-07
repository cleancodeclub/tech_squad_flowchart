import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore/lite';

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


//add a single document
dataRouter.post('/', async (req, res) => {
  // Add a new document with a generated id.
  const data = {
    imgURL: 'https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    text: 'Test'
    } 
  addDoc(colRef, data)
  // const addDoc = await db.collection('test').doc('shaunTestAdd').set(data);
  res.status(200).send("Successful")
});

// [TODO Elijah] delete a document
dataRouter.delete('/delete', async (req, res) => {
  await deleteDoc(doc(db, "test", "optjhzgDK2ylSs4lyZLl"))
})

// [TODO Ricardo] update a document
dataRouter.patch('/update', async (req, res) => {
  const docRef = doc(db, 'test', "76UNes7S5BJVDmi2Ts2s")
  await updateDoc(docRef, {text: "New update"})
  res.status(200).send('Sucessful')
})

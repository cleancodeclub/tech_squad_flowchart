import express from "express";
import { initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { firebaseConfig } from "../config.js";
export const dataRouter = express.Router();
import { doc, getDoc} from "firebase/firestore";
import { async } from "@firebase/util";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const targetId = 'GyD5uxvecyXcayraC5ds'

//returns all data
dataRouter.get("/", async (req, res) => {
  const querySnapshot = await getDocs(collection(db, "test"))
  const documents = querySnapshot.docs;
  const documentCopy = documents.map((doc) => {
    return {
      id: doc.id,
      data: doc.data().text,
      imgURL: doc.data()?.imgURL,
    };
  });
  res.send(documentCopy);
});

// return one document
dataRouter.get("/:id", async (req, res) => {
  const dataCollection = await collection(db, "test")
  const dataSnapshot = await getDocs(dataCollection)
  const dataSource = dataSnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      data: doc.data().text,
      imgURL: doc.data()?.imgURL,
    };
  })
  const document = dataSource.filter(doc => doc.id === targetId)
  
  res.send(document)
})







import express from "express";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { firebaseConfig } from "../config.js";
export const dataRouter = express.Router();
import { doc, getDoc } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

//returns all data
dataRouter.get("/", async (req, res) => {
  const querySnapshot = await getDocs(collection(db, "test"));
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

dataRouter.get("/:id", async (req, res) => {
  // const id = await req.params.id

  //   const snapshot = await db.collection('test').doc(id).get();
  //   const data = snapshot.data();
  //   console.log(`data: ${data}`)
  //   res.send(data)
});

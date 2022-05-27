import express from "express";
const router = express.Router()

router.get('/step', ( req, res ) =>{
  res.send({data: "get steps"})
})

module.exports = router

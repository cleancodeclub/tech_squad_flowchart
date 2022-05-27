import express from "express";
const router = express.Router()

// [TODO Ricardo]: Create crud methods
// Read All
router.get('/step', ( req, res ) =>{
  res.send({data: "get steps"})
})

// Read one
router.get('/step/:id', (req, res) => {
  res.send({id: req.params})
})

// Create

// Delete

// Update

module.exports = router

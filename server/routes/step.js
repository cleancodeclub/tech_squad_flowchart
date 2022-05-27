import express from "express";
export const stepRouter = express.Router()

// [TODO Ricardo]: Create crud methods
// Read All

stepRouter.get('/', ( req, res ) =>{
  res.send({data: "get steps"})
})

// Read one
stepRouter.get('/:id', (req, res) => {
  res.send({id: req.params.id})
})

// Create
stepRouter.post('/', (req, res) => {
  res.send({message: 'sucessfully created'})
})

// Delete
stepRouter.delete('/:id', (req, res) => {
  res.send({message: `sucessfully deleted ${req.params.id}`})
})

// Update
stepRouter.put('/:id', (req, res) => {
  res.send({message: `sucessfully updated ${req.params.id}`})
})



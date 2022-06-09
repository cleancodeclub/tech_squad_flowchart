import express from 'express'
import { stepRouter } from './routes/step.js';
import { dataRouter } from './routes/data.js';

// express setup
const app = express()
const PORT = process.env.PORT || 8080

app.use('/step', stepRouter)
app.use('/data', dataRouter)

app.get('/', (req, res) => {
    res.send('Welcome to tech squad')
    console.log(process.env)
})

// [TODO Ricardo] make this work independent of if we are on local or remote hosting.
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})





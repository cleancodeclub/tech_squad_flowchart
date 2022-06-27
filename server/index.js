import express from 'express'
import { stepRouter } from './routes/step.js';
import { dataRouter } from './routes/data.js';

// express setup
const app = express()
app.use(express.json())

// setup cross origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

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

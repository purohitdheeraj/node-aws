import express from 'express'

const PORT = 3000

const app = express()

app.get('/', (req, res)=>{
  res.send('Hare Krishna Welcome to my first ec2 machine')
})

app.get('/health', (req, res)=>{
  res.send('Hari Bol All working fine')
})

app.listen(PORT, ()=>{
  console.log(`server is listening on port ${PORT}`)
})
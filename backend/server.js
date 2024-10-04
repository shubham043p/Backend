import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

const port = process.env.PORT || 3000;

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another Joke',
            content:'This is another joke'
        }
    ]
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`Served at local host ${port}`);
})
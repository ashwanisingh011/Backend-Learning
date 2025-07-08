import express from 'express'

const app = express();

app.get('/', (req, res)=>{
    res.send("Server is ready");
});

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            Title: 'First Joke',
            Content: 'This is a joke'
        },
        {
            id: 2,
            Title: 'Another Joke',
            Content: 'This is another joke'
        },
        {
            id: 3,
            Title: 'Third Joke',
            Content: 'This is third joke'
        },
        {
            id: 4,
            Title: 'Fourth Joke',
            Content: 'This is fourth joke'
        },
        {
            id: 5,
            Title: 'Fifth Joke',
            Content: 'This is fifth joke'
        },
    ]
    res.send(jokes)
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
});
    
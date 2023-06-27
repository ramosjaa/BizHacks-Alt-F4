const express = require('express');
// const cors = require('cors');


const PORT = process.env.PORT || 8080;

const app = express()


app.all('/', (req, res) => {
    res.send('Hello, World!')
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
const express = require('express');
// const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const op = require('openai')

const configuration = new op.Configuration({
    apiKey: process.env.CHAT_API_SECRET,
});
const openai = new op.OpenAIApi(configuration);

const PORT = process.env.PORT || 8080;

const app = express()

const testPrompt = "Please tell me a joke."

app.get('/test', async (req, res) => {
    try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: testPrompt,
          temperature: 0.6,
        });
        res.status(200).json({ result: completion.data.choices[0].text });
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          res.status(error.response.status).json(error.response.data);
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          res.status(500).json({
            error: {
              message: 'An error occurred during your request.',
            }
          });
        }
      }
})

app.all('/', (req, res) => {
    res.send('Hello, World!')
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
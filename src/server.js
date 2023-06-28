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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: Create fake applicants
const applicants = [
    {
        id: 0,
        name: "Emily Johnson",
        age: 28,
        location: "San Francisco, California",
        experiences: "Emily has worked as a marketing coordinator for a digital advertising agency for the past five years. She has experience managing social media campaigns, coordinating events, and conducting market research. She is skilled in using various marketing tools and has a strong understanding of digital marketing strategies. Emily is looking for a challenging role where she can utilize her creative skills and contribute to a dynamic team."
    },
    {
        id: 1,
        name: "James Anderson",
        age: 35,
        location: "New York City, New York",
        experiences: "James has a diverse work history, having worked in various industries. He started his career as a financial analyst at a banking institution, then transitioned to a project manager role in a construction company. He has also worked as a business development manager for a technology startup. James is adaptable, with strong analytical and problem-solving skills. He is currently seeking a new opportunity that allows him to combine his diverse skill set and contribute to a growing organization."
    },
    {
        id: 2,
        name: "Sophia Patel",
        age: 32,
        location: "London, United Kingdom",
        experiences: "Sophia has an extensive background in human resources. She has worked as an HR manager for a multinational corporation, where she was responsible for recruitment, employee relations, and performance management. She has also led training and development programs and implemented HR policies and procedures. Sophia is passionate about creating a positive work environment and fostering employee growth. She is seeking a challenging HR role that allows her to make a meaningful impact on an organization's culture and talent development."
    },
    {
        id: 3,
        Name: "Alexander Ramirez",
        age: 25,
        location: "Sydney, Australia",
        experiences: "Alexander has a background in software development and has worked as a software engineer for a tech company for the past three years. He specializes in web application development and has experience with front-end and back-end technologies. Alexander is skilled in programming languages such as Python, JavaScript, and Java. He is eager to contribute his technical expertise to a company that values innovation and offers opportunities for professional growth."
    }
]

// TODO: Write a prompt to reword job descriptions based on applicant experiences/details
const rewordPrompt = (jobDesc, applicant) => {
    return `Please reword the shared attributes in the job description to appeal to the applicant's experiences without changing the job itself. The job description is "${jobDesc}" and the applicant has these experiences: "${applicant.experiences}"`
}

// TODO: Write a prompt to filter out unrelated applicant experiences/details
const filterPrompt = (keywords, applicant) => {
    return `Please filter out any of the applicant's experiences/attributes that are unrelated to the keywords. The keywords are "${keywords}" and the applicant is "${applicant.experiences}"`
}

// TODO: Write a prompt to set up ChatGPT as a job recruiter/job screener
const initialPrompt = () => {
    return "Act as a job recruiter looking to optimize job descriptions as well as assess applicants' experiences. Limit all responses to 500 characters."
}


/*  Input (AKA req.body): 
        {
            keywords: string => Keywords that are entered into the text box for filtering applicants
            applicant: string/int => The number of one of fake applicants created
        }
    Output:
        {
            result: {
                role: string => "assistant",
                content: string => ChatGPT's response to the prompts
            } 
        }
*/
app.post('/filter', async (req, res) => {
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo-16k-0613",
            messages: [ 
                {role: "system", content: initialPrompt()},
                {role: "system", content: filterPrompt(req.body.keywords, applicants[req.body.applicant])} 
            ],
            temperature: 0.6,
        });
        console.log({ result: completion.data.choices[0].message })
        res.status(200).json({ result: completion.data.choices[0].message });
    } catch (error) {
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

// TODO: POST endpoint for rewording job descriptions
/*  Input (AKA req.body): 
        {
            jobDesc: string => The original job description
            applicant: string/int => The number of one of fake applicants created
        }
    Output:
        {
            result: {
                role: string => "assistant",
                content: string => ChatGPT's response to the prompts
            } 
        }
*/
app.post('/reword', async (req, res) => {
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo-16k-0613",
            messages: [ 
                {role: "system", content: initialPrompt()},
                {role: "system", content: rewordPrompt(req.body.jobDesc, applicants[req.body.applicant])} 
            ],
            temperature: 0.6,
        });
        console.log({ result: completion.data.choices[0].message })
        res.status(200).json({ result: completion.data.choices[0].message });
    } catch (error) {
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
});

app.listen(PORT, async () => {
    console.log(`Server listening on ${PORT}`);
});
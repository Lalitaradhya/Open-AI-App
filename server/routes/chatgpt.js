import { Configuration, OpenAIApi } from "openai";
import express, { response } from 'express'
import cors from 'cors'
import bodyParser from "body-parser";

const configuration = new Configuration({
    organization: "org-thOPnJQyv0oQwAbI53GHPJCc",
    apiKey:'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'
});
const openai = new OpenAIApi(configuration);

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/', async (req,res) =>{
    const { message } = req.body;
    console.log(message)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
      
      res.json({
        message: response.data.choices[0].text
      })
})

     

app.listen(port, ( ) => {
    console.log(`Example app listening at  http://localhost:${port}`)
})
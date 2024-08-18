import express from 'express'
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post("/test/register",(req , res)=>{
    const [companyName , ownerName , rollNo , ownerEmail , accessCode] = req.body 

    if(!companyName || !ownerName || !rollNo || !ownerEmail || !accessCode){
        return res.status(400).json({
            message : 'Provide all the details'
        })
    } 

    if(accessCode != 'QNmESO'){
        return res.status(400).json({
            message : 'Give valid access code'
        })
    }

    return res.status(200).json({
        
    })

})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

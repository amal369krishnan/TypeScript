import express,{Request,Response} from 'express';
import {admin} from '../admin/processors';


const app = express.Router()

app.get('/',(req:Request, res:Response)=>res.send("Server running successfully.."))

app.post('/',admin)

export default app;
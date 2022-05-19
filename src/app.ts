import express, {Application} from "express";
import router from './routers/routers'

let port = 8001
const app:Application = express();
app.use(express.json())
app.use(router);

app.listen(port, ()=>console.log(port));
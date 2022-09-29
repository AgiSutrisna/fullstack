import express from "express";
import cors from "cors";
import formRoute from "./routes/formRoute.js";

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(formRoute);

app.listen(5000, ()=> console.log('Server up and running...'));
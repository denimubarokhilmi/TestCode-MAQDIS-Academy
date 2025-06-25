import express from "express";
import router from "./router/routes.js";
export const app = express();
const port = 3000;
app.disable('x-powered-by');
app.use(express.json());

const allowedRoutes = ['/hello', '/send-data', '/delete-data', '/delete-deposit'];
app.use((req, res, next) => {
    if (allowedRoutes.includes(req.path)) return next();
    else {
        res.status(404).json({
            error: "Not Found",
            message: "The router you are looking for is not found"
        })
    }
})

app.use(router);
app.listen(port, () => {
    console.log(`server is running in port ${port}`);
})
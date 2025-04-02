const dotenv = require('dotenv')
dotenv.config();
const http = require('http');
const cors = require('cors');
const app = require('./app');
const port = process.env.POST || 3000;

app.use(cors());


const server = http.createServer(app);


server.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});
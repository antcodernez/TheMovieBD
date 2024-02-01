import dotenv from "dotenv";

dotenv.config({path: ".env"});

const config = {
    apiKey: process.env.API_KEY
}

export { config }
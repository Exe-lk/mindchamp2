import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";

export const basiclevelRouter = express.Router();
basiclevelRouter.use(express.json());

basiclevelRouter.post("/", async (req, res) => {
    try {
        const basiclevel = req.body;
        const result = await collections.employees.insertOne(basiclevel);
  
        if (result.acknowledged) {
            res.status(201).send(`Created a new employee: ID ${result.insertedId}.`);
            console.log("Created a new employee");
        } else {
            res.status(500).send("Failed to create a new employee.");
            console.log("Failed to create a new employee.");
        }
    } catch (error:any) {
        console.error(error);
        res.status(400).send(error.message);
    }
 });
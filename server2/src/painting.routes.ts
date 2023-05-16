import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";

export const paintingRouter = express.Router();
paintingRouter.use(express.json());

paintingRouter.post("/", async (req, res) => {
    try {
        const painting = req.body;
        const result = await collections.paintings.insertOne(painting);
  
        if (result.acknowledged) {
            res.status(201).send(`Created a new painting: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new painting.");
        }
    } catch (error:any) {
        console.error(error);
        res.status(400).send(error.message);
    }
 });

paintingRouter.get("/:id", async (req:any, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const paintings = await collections.paintings.findOne(query);
  
        if (paintings) {
            res.status(200).send(paintings);
            console.log("data fetching")
        } else {
            res.status(404).send(`Failed to find an painting: ID ${id}`);
        }
  
    } catch (error) {
        res.status(404).send(`Failed to find an painting: ID ${req?.params?.id}`);
    }
 });

paintingRouter.put("/update/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const paintings = req.body;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.paintings.updateOne(query, { $set: paintings });

        if (result && result.matchedCount) {
            res.status(200).send(`Updated an employee: ID ${id}.`);
        } else if (!result.matchedCount) {
            res.status(404).send(`Failed to find an employee: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update an employee: ID ${id}`);
        }
    } catch (error:any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";

export const musicRouter = express.Router();
musicRouter.use(express.json());

musicRouter.post("/", async (req, res) => {
    try {
        const music = req.body;
        const result = await collections.musics.insertOne(music);

        if (result.acknowledged) {
            res.status(201).send(`Created a new painting: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new painting.");
        }
    } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

musicRouter.get("/:id", async (req: any, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const musics = await collections.musics.findOne(query);

        if (musics) {
            res.status(200).send(musics);
            console.log("data fetching")
        } else {
            res.status(404).send(`Failed to find an painting: ID ${id}`);
        }

    } catch (error) {
        res.status(404).send(`Failed to find an painting: ID ${req?.params?.id}`);
    }
});

musicRouter.put("/update/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const musics = req.body;
        const query = { _id: new mongodb.ObjectId(id) };
        const result = await collections.musics.updateOne(query, { $set: musics });

        if (result && result.matchedCount) {
            res.status(200).send(`Updated an employee: ID ${id}.`);
        } else if (!result.matchedCount) {
            res.status(404).send(`Failed to find an employee: ID ${id}`);
        } else {
            res.status(304).send(`Failed to update an employee: ID ${id}`);
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
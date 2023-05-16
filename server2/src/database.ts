import * as mongodb from "mongodb";
import { BasicLevel } from "./basicLevel";
import { Employee } from "./employee";
import { Painting } from "./painting";
import { Music } from "./music";

export const collections: {
    employees?: mongodb.Collection<Employee> | any;
    basiclevels?: mongodb.Collection<BasicLevel> | any
    paintings?: mongodb.Collection<Painting> | any
    musics?: mongodb.Collection<Music> | any
} = {};

export async function connectToDatabase(uri: string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();

    const db = client.db("mindchamp");
    await applySchemaValidation(db);

    const employeesCollection = db.collection<Employee>("employees");
    collections.employees = employeesCollection;
    const basiclevelsCollection = db.collection<BasicLevel>("basiclevels");
    collections.basiclevels = basiclevelsCollection;
    const paintingsCollection = db.collection<Painting>("paintings");
    collections.paintings = paintingsCollection;
    const musicsCollection = db.collection<Music>("musics");
    collections.musics = musicsCollection;
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Employee model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "position", "level"],
            additionalProperties: false,
            properties: {
                _id: {},
                name: {
                    bsonType: "string",
                    description: "'name' is required and is a string",
                },
                position: {
                    bsonType: "string",
                    description: "'position' is required and is a string",
                    minLength: 5
                },
                level: {
                    bsonType: "string",
                    description: "'level' is required and is one of 'junior', 'mid', or 'senior'",
                    enum: ["junior", "mid", "senior"],
                },
            },
        },
    };

    const jsonSchema_basic = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "position", "level"],
            additionalProperties: false,
            properties: {
                _id: {},
                fillcolors: {
                    bsonType: "string",
                    description: "'name' is required and is a string",
                },
                lastUnlock: {
                    bsonType: "number",
                    description: "'position' is required and is a string",
                    minLength: 5
                },
                state: {
                    bsonType: "string",
                    description: "'level' is required and is one of 'junior', 'mid', or 'senior'",
                    enum: ["Inprogress", "Completed", "Lock"],
                },
                addStarPoint: {
                    bsonType: "number",
                    description: "'name' is required and is a string",
                }
            },
        },
    };


    const jsonSchema_painting = {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "uid",
                "current_state",
                "last_unlock_p",
                "star_points",
                "level",
                "Beginner",
                "Intermediate",
                "Advanced"
            ],
            additionalProperties: false,
            properties: {
                uid: {
                    bsonType: "string"
                },
                current_state: {
                    bsonType: "string"
                },
                last_unlock_p: {
                    bsonType: "integer"
                },
                star_points: {
                    bsonType: "integer"
                },
                level: {
                    bsonType: "string"
                },
                Beginner: {
                    bsonType: "object",
                    properties: {
                        fill_color: {
                            bsonType: "object",
                            properties: {
                                bp1: {
                                    bsonType: "string"
                                },
                                bp2: {
                                    bsonType: "string"
                                },
                                bp3: {
                                    bsonType: "string"
                                },
                                bp4: {
                                    bsonType: "string"
                                },
                                bp5: {
                                    bsonType: "string"
                                }
                            },
                            required: [
                                "bp1",
                                "bp2",
                                "bp3",
                                "bp4",
                                "bp5"
                            ]
                        }
                    },
                    required: [
                        "fill_color"
                    ]
                },
                Intermediate: {
                    bsonType: "object",
                    properties: {
                        fill_color: {
                            bsonType: "object",
                            properties: {
                                Ip1: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                },
                                Ip2: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                },
                                Ip3: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                },
                                Ip4: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                },
                                Ip5: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                }
                            },
                            required: [
                                "Ip1",
                                "Ip2",
                                "Ip3",
                                "Ip4",
                                "Ip5"
                            ]
                        }
                    },
                    required: [
                        "fill_color"
                    ]
                },
                Advanced: {
                    bsonType: "object",
                    properties: {
                        fill_color: {
                            bsonType: "object",
                            properties: {
                                Ap1: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                },
                                Ap2: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                },
                                Ap3: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                },
                                Ap4: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                },
                                Ap5: {
                                    bsonType: "array",
                                    items: [
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        },
                                        {
                                            bsonType: "string"
                                        }
                                    ]
                                }
                            },
                            required: [
                                "Ap1",
                                "Ap2",
                                "Ap3",
                                "Ap4",
                                "Ap5"
                            ]
                        }
                    },
                    required: [
                        "fill_color"
                    ]
                }
            }
        },
    };

    const jsonSchema_music = {
        $jsonSchema: {
            bsonType: "object",
            required: ["uid", "starPoints", "currentLevel"],
            additionalProperties: false,
            properties: {
                _id: {},
                uid: {
                    bsonType: "string",
                    description: "'uid' is required and it is a string",
                },
                starPoints: {
                    bsonType: "number",
                    description: "'starPoints' is required and it is number",
                },
                currentLevel: {
                    bsonType: "string",
                    description: "'currentLevel' is required and it is string",
                },
                sublevel:{
                    bsonType: "number",
                    description: "'sublevel' is required and it is number",
                }
            },
        },
    };

    // Try applying the modification to the collection, if the collection doesn't exist, create it
    await db.command({
        collMod: "employees",
        validator: jsonSchema
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection("employees", { validator: jsonSchema });
        }
    });

    await db.command({
        collMod: "basiclevels",
        validator: jsonSchema_basic
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection("basiclevels", { validator: jsonSchema_basic });
        }
    });

    await db.command({
        collMod: "paintings",
        validator: jsonSchema_painting
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection("paintings", { validator: jsonSchema_painting });
        }
    });

    await db.command({
        collMod: "musics",
        validator: jsonSchema_music
    }).catch(async (error: mongodb.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection("musics", { validator: jsonSchema_music });
        }
    });
}
import { Response } from "express";
import path from "path";
import fs from "fs";
import { JwtPayload } from "jsonwebtoken";
import { v4 } from "uuid";

const databaseFolder = path.join(__dirname, "../../../src/bookDatabase");
const databaseFile = path.join(databaseFolder, "bookDatabase.json");

const AddAssignment = async (req: JwtPayload, res: Response) => {
  try {
    interface assignment {
      level: string;
      title: string;
      description: string;
      dateAdded: Date;
      assignmentId: string;
      ownerId: string;
    }

    const id = req.user.id;

    //create database
    if (!fs.existsSync(databaseFolder)) {
      fs.mkdirSync(databaseFolder);
    }
    if (!fs.existsSync(databaseFile)) {
      fs.writeFileSync(databaseFile, "[]", "utf-8");
    }

    //fetch from frontend
    const { level, title, description } = req.body;
    let database: assignment[] = [];
    const databaseContent = fs.readFileSync(databaseFile, "utf-8");
    try {
      if (!databaseContent) {
        return res.status(400).json({
          status: `Operation failed`,
          message: `Information not found in the database`,
        });
      } else {
        database = JSON.parse(databaseContent);
      }
    } catch (parseError) {
      console.log(parseError);
      database = [];
    }
    const findAssignment = database.find(
      (assignment) => assignment.title === title
    );

    if (findAssignment) {
      return res.status(400).json({
        status: `Unable to add assignment`,
        message: `${title} already exists`,
      });
    }
    const newAssignment: assignment = {
      level,
      title,
      description,
      dateAdded: new Date(),
      assignmentId: v4(),
      ownerId: id,
    };
    database.push(newAssignment);
    fs.writeFileSync(databaseFile, JSON.stringify(database, null, 2), "utf-8");

    return res.status(200).json({
      status: `Congratulations`,
      message: `Assignment added successfully`,
      newAssignment,
    });
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({
      message: `Internal Server Error`,
    });
  }
};

export default AddAssignment;

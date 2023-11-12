import { Response } from "express";
import path from "path";
import fs from "fs";
import { JwtPayload } from "jsonwebtoken";
import { v4 } from "uuid";

const databaseFolder = path.join(__dirname, "../../../src/bookDatabase");
const databaseFile = path.join(databaseFolder, "bookDatabase.json");

const AddScore = async (req: JwtPayload, res: Response) => {
  try {
    interface scores {
      studentId: string;
      studentName: string;
      level: string;
      course: string;
      title: string;
      email: string;
      score: string;
      dateAdded: Date;
      courseId: string;
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
    const { studentName, level, course, title, email, score } = req.body;
    let database: scores[] = [];
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
    const findScore = database.find((score: scores) => score.email === email);

    if (findScore) {
      return res.status(400).json({
        status: `Unable to add score`,
        message: `${score} already exists`,
      });
    }
    const newScore: scores = {
      studentId: id,
      studentName,
      level,
      course,
      title,
      email,
      score,
      dateAdded: new Date(),
      courseId: v4(),
      ownerId: id,
    };
    database.push(newScore);
    fs.writeFileSync(databaseFile, JSON.stringify(database, null, 2), "utf-8");

    return res.status(200).json({
      status: `Congratulations`,
      message: `Score added successfully`,
      newScore,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      message: `Internal Server Error`,
    });
  }
};

export default AddScore;

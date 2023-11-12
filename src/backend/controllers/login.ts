import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import bcrypt from "bcryptjs";
import { generateToken } from "../utilities/helpers";

const databaseFolder = path.join(__dirname, "../database");
const databaseFile = path.join(databaseFolder, "userDB.json");

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  level: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    //fetch login details from frontend
    const { email, password } = req.body;
    const databaseData = fs.readFileSync(databaseFile, "utf-8");

    let database;
    //To check if database exist
    if (!databaseData) {
      return res.status(404).json({
        status: "not found",
        message: "Unable to fetch information",
      });
    } else {
      database = JSON.parse(databaseData);
    }
    //Check if user account exist
    const checkUser = database.find((user: User) => user.email === email);
    if (!checkUser) {
      return res.status(404).json({
        status: "Not found",
        message: `No user with ${email} found`,
      });
    }
    //check if user password matches
    const validate = await bcrypt.compare(password, checkUser.password);

    if (validate) {
      const data = {
        firstName: checkUser.firstName,
        lastName: checkUser.lastName,
        email: checkUser.email,
      };
      const token = generateToken(data);

      return res.status(200).json({
        message: "Login Successful",
        token: token,
      });
    }
    return res.status(400).json({
      status: "Unsuccessful",
      message: "Login attempt failed",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "failed",
      message: "Internal sever error",
    });
  }
};

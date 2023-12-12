import { Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
  try {
    return res.send("Ok");
  } catch (e) {
    return res.status(400).json({ message: "Failed", e });
  }
};

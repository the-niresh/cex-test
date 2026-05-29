

import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
    res.json({ userID: req.body.userID });
}
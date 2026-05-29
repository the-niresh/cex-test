

import { Request, Response } from "express";

export const createOrder = (req: Request, res: Response) => {
    const data = 
    res.json({ orderId: req.body.orderId, data: data });
}

import { Router } from "express";
import { Request, Response } from "express";
import { User } from "../models/user";
const router = Router();

router.get("/", async(req: Request, res: Response) => {
   const users = await User.findAll();
   return res.render("index", {
      users
   })
})


export {router as homeRouter}
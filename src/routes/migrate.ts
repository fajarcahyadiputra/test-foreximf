import {Router, Response, Request} from 'express';
import {body} from 'express-validator';
import { validateRequest } from '../middleware/validate-request';
import { User } from '../models/user';
const router = Router();

router.post("/migrate",[
    body("user_id").notEmpty().notEmpty().withMessage("You must supply user id"),
    body("parent_id").notEmpty().withMessage("You must supply parent id")
], validateRequest, async function(req: Request, res: Response){
    try {
        const {parent_id, user_id} = req.body;
        const parent = await User.findByPk(user_id);
        await parent?.update({parent_id})
        return res.status(200).json(parent)
    } catch (error: any) {
        console.log(error.message);
        
    }
 })


 export {router as migrate}
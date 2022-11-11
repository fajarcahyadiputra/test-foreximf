import {Router, Response, Request} from 'express';
import { User } from '../models/user';

const router = Router();

router.post("/calculate",async function(req: Request, res: Response){
    const {user_id} = req.body;
    const user = await User.findByPk(user_id);
    return res.json(user);
 })




 export {router as calculateBonus}
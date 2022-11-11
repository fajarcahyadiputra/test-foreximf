import {Router, Request, Response} from 'express';
import {body, validationResult} from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { validateRequest } from '../middleware/validate-request';
import { User } from '../models/user';
import db from '../config/db'
import { Transaction } from 'sequelize';


const router = Router();

router.post("/signup", [
    body("name").notEmpty().notEmpty().withMessage("You must supply name"),
    body("parent_id").notEmpty().withMessage("You must supply parent id")
], validateRequest, async function(req: Request, res: Response){
    const t: Transaction = await db.transaction();
    try {
        const dataBody = req.body;
        dataBody.bonus = 0
        if(dataBody.parent_id != "0"){
            const parent = await User.findByPk(dataBody.parent_id);
            if(parent?.level == 2){
                const totalBonus = parent?.bonus! +1;
                await parent?.update({bonus: totalBonus}, {transaction: t})
                const mainParent = await User.findByPk(parent.parent_id);
                console.log(mainParent);
                
                const totalBonusParent = mainParent?.bonus! + 0.5;
                await mainParent?.update({bonus: totalBonusParent}, {transaction: t})
            }else{
                const totalBonus = parent?.bonus! + 1;
                parent?.update({bonus: totalBonus})
            }
            await parent?.save();
            dataBody.level = parent?.level! + 1 || "-";

        }else{
            dataBody.level = 1; 
        }
        const newUser = await User.create(dataBody, {transaction: t});
        t.commit();
      return res.status(201).json(newUser)

    } catch (error: any) {
        t.rollback();
        console.log(error.message);
        
    }
 })


 export {router as signup}
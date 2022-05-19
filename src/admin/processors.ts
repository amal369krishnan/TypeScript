import {Request,Response} from 'express';
import * as yup from 'yup';

const validation = yup.object().shape({
    body: yup.object().shape({
        username: yup.string().required()
    })
})

export const admin = async(req:Request, res:Response)=>{
    try {
        const payload = await validation.validate(req)
        res.json(payload.body)
    } catch (error:any) {
        res.json(error.errors[0])
        
    }
    
}
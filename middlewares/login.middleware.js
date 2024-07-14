import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authUser = async (req, res, next) => {
   const token = req.header('Authorization')

   if (!token) {
     return res.status(401).json({ message: 'Acceso no autorizado. Falta el token de autenticación.' })
   }
 
   try {
     const decoded = jwt.verify(token, process.env.SECRET_KEY)
 
     req.user = decoded;
 
     next();
   } catch (error) {
     return res.status(401).json({ message: 'Token no válido' })
   }
};
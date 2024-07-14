import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import dotenv from 'dotenv'

dotenv.config()

export const login = async (req, res) => {
  try {
    const { nickname, password } = req.body

    const user = await User.findOne({ where: {nickname} })

    if(!user) {
      return res.status(401).json({ message: 'Credenciales invalidas' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales invalidas' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1h'
    });

    res.json({ token, userId: user.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const createUser = async(req, res) => {
  try {
    const {
      name,
      lastName,
      nickname,
      password
    } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      name,
      lastName,
      nickname,
      password: hashedPassword
    })

    const user = await User.findOne({ where: { nickname } });
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()

    res.json(users?? [])
  } catch (error) {
    
  }
}
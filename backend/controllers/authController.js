import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { nom, prenom, email, password } = req.body
  try {
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ error: 'Email déjà utilisé' })

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ nom, prenom, email, password: hashedPassword })
    await newUser.save()

    res.status(201).json({ message: 'Compte créé avec succès' })
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ error: 'Email ou mot de passe incorrect' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ error: 'Email ou mot de passe incorrect' })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
    res.json({
      token,
      user: {
        id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email
      }
    })
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

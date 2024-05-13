import express from 'express';
import User, { generateJWTSECRET } from '../../models/userSchema.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
const router = express.Router();


router.get('/', (req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
  });

router.post('/signup', (req, res) => {
    User.create(req.body)
      .then(user => res.json({ msg: 'User added successfully' }))
      .catch(err => res.status(400).json({ error: err }));
  });

  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
  
      // Check if user exists and password matches
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
        const secretKey = await generateJWTSECRET();

  
      // Generate JWT token
      const payload = { userId: user._id };
      const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  export default router;
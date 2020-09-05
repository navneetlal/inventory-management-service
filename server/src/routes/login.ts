import express from 'express';
import verifyPassword from '../authentication/verifyPassword';
import { generateToken, verifyToken } from '../authentication/token';

const router = express.Router();

router.post('/login', async (req, res) => {
  const user = req.body;
  const auth = await verifyPassword(user)
  if (!auth) res.status(403).send({ message: "username or password doesn't match" })
  else {
    const claims = {
      iss: "Navneet",
      sub: "Login",
      aud: "angular"
    }
    const token = generateToken(claims)
    res.status(200).send({ token })
  }
})

router.post('/token/verify', async (req, res) => {
  const token = req.body;
  const isValid = await verifyToken(token);
  if(isValid) res.status(200).send({ message: 'Token is verified' })
  else res.status(403).send({ message: 'Token is invalid' })
})

export default router;
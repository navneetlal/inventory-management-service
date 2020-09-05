import express from 'express';
import verifyPassword from '../authentication/verifyPassword';
import { generateToken } from '../authentication/token';

const router = express.Router();

router.post('/login', async (req, res) => {
  const user = req.body;
  console.log('body', req.body)
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

export default router;
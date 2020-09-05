import express from 'express';
import verifyPassword from '../authentication/verifyPassword';
import hashPassword from '../authentication/hashPassword';
import { generateToken } from '../authentication/token';

const router = express.Router();

router.post('/login', async (req, res) => {
  const user = req.body;
  const hashedPassword = await hashPassword(user.password)
  const auth = verifyPassword(hashedPassword, user)
  if(!auth) res.send(403)
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
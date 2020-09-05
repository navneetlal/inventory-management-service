import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export function generateToken(claims: any) {
  var privateKey = fs.readFileSync(path.resolve(__dirname, 'private.key'));
  var token = jwt.sign(claims, privateKey, { algorithm: 'RS256' });
  return token;
}

export function verifyToken(token: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    var publicKey = fs.readFileSync(path.resolve(__dirname, 'primary.key'));
    jwt.verify(token, publicKey, function (err, decoded: any) {
      if (err) resolve(false)
      resolve(true)
    });
  })
}
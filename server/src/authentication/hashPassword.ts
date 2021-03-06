import bcrypt from 'bcrypt';

const saltRounds = 10;

export interface IHashedPassword {
  hash: string
  salt: string
}

export default function hashPassword(value: string, savedSalt?: string): Promise<IHashedPassword> {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) reject(err);
      bcrypt.hash(value, savedSalt ? savedSalt : salt, function (err, hash) {
        if (err) reject(err);
        resolve({ hash, salt: savedSalt ? savedSalt : salt })
      });
    });
  })
}
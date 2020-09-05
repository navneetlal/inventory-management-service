import mysqlConnection from '../dbContext/mysql';
import { IUser } from '../interface/user';
import hashPassword from './hashPassword';

export default function verifyPassword(user: IUser): Promise<boolean> {
  return new Promise((resolve, reject) => {
    mysqlConnection.query("SELECT * FROM Users WHERE username = ?", [user.username], async (error, result) => {
      if (error) reject(error);
      else {
        const availableUser = result[0];
        const hashedPassword = await hashPassword(user.password, availableUser.salt)
        if (hashedPassword.hash === availableUser.password) resolve(true)
        else resolve(false)
      }
    })
  })
}
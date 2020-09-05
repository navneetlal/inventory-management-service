import mysqlQuery from '../dbContext/mysql';
import { IUser } from '../interface/user';
import { IHashedPassword } from './hashPassword';

export default function verifyPassword(hashedPassword: IHashedPassword, user: IUser) {
  const queryResult = mysqlQuery("show databases")
  return true;
}
/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';

export async function hashPassword(textPassword: string) {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(textPassword, salt);
  return hash;
}

export async function validatePassword(textPassword: string, hash: string) {
  const validUser = await bcrypt.compare(textPassword, hash);
  return validUser;
}

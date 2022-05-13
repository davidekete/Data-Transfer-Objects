/* eslint-disable prettier/prettier */
import { IsEmail } from 'class-validator';

export class loginUserDto {
  @IsEmail({ message: 'Please Enter a Valid Email' })
  email: string;

  password: string;
}

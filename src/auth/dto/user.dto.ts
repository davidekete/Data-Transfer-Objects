/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, Length, IsString } from 'class-validator';

export class newUserDto {
  @IsNotEmpty({ message: 'Please Enter Full Name' })
  @IsString({ message: 'Please Enter Valid Name' })
  fullName: string;

  @IsEmail({ message: 'Please Enter a Valid Email' })
  email: string;

  @Length(6, 50, {
    message: 'Password length Must be between 6 and 50 charcters',
  })
  password: string;
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { newUserDto } from './dto/user.dto';
import { loginUserDto } from './dto/login.dto';
import { hashPassword } from './utilis/bcrypt.utils';
import { validatePassword } from './utilis/bcrypt.utils';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async newUser(user: newUserDto): Promise<User> {
    const password = await hashPassword(user.password);
    return await new this.userModel({ ...user, password }).save();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  async getUser(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async updateUser(id: string, userData: newUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, userData);
  }

  async loginUser(loginData: loginUserDto) {
    const email = loginData.email;
    const user = await this.userModel.findOne({ email });
    console.log(user);
    if (user) {
      const valid = await validatePassword(loginData.password, user.password);
      if (valid) {
        return user;
      }
    }
    return new UnauthorizedException('Invalid Credentials');
  }
}

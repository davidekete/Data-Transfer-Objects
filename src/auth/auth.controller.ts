import {
  Controller,
  Body,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { newUserDto } from './dto/user.dto';
import { loginUserDto } from './dto/login.dto';

@Controller('users')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('signup')
  async createUser(
    @Body()
    user: newUserDto,
  ): Promise<newUserDto> {
    return await this.service.newUser(user);
  }

  @Post('login')
  async loginUser(
    @Body()
    loginData: loginUserDto,
  ) {
    return await this.service.loginUser(loginData);
  }

  @Get()
  async getAllUsers(): Promise<newUserDto[]> {
    return await this.service.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<newUserDto> {
    return await this.service.getUser(id);
  }

  @Put(':id')
  async updateuser(
    @Param('id')
    id: string,
    @Body()
    user: newUserDto,
  ): Promise<newUserDto> {
    return this.service.updateUser(id, user);
  }
}

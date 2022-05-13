import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [AuthModule, MongooseModule.forRoot(process.env.MONGODB_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}

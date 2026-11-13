import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterUserDto } from './dto/register-dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    this.authService.loginUser(registerUserDto)
  }
}

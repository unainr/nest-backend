import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService:AuthService){
      
    }
 @Get('login')

 loginUser(){
    return this.authService.loginUser();
 }



}

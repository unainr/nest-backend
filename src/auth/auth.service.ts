import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import { RegisterUserDto } from './dto/register-dto.js';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService){}
    loginUser(registerUserDto:RegisterUserDto){
        const data = this.userService.createUser()
        return data
        
    }
}

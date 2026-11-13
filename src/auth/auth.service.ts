import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    loginUser(){
        return {message: 'user logged successfully'}
    }
}

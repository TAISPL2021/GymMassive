export class LoginResponse {

    constructor(
        public email: string,
        public token:string,
        public refreshToken:string
    ){}
    
}
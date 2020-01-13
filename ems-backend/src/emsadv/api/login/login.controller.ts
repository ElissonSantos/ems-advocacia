import { Controller, Get, Param } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

  constructor(private readonly loginService: LoginService) {}

  @Get(':id')
  retorna(@Param('id') id: number) {
    return this.loginService.calculo(id);
  }

  @Get()
  getHello(): string {
    return this.loginService.getHello();
  }
}

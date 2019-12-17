import { Injectable } from '@nestjs/common';
import { log } from 'util';

export interface Pessoa {
  id: number;
  nome: string;
  idade: string;
  orienSexual: string;
}

@Injectable()
export class LoginService {

  public retornoPessoa: any;

  async calculo(id: number) {
    const retorno: Pessoa[] = [
      {
        id: 1,
        nome: 'Matheus Ripper',
        idade: '14 anos',
        orienSexual: 'Gay',
      },
      {
        id: 2,
        nome: 'Elisson Maycon',
        idade: '22 anos',
        orienSexual: 'Macho gostoso',
      },
      {
        id: 3,
        nome: 'Nattan das Velocidades',
        idade: '28 anos',
        orienSexual: 'Indefinido',
      },
    ];
    const pessoaSelecionada = id;
    log(pessoaSelecionada.toString());
    for (let i = 0; 0 < retorno.length; i++) {
      log('ou ayqu ne')
      const valor = retorno[i].id;
      log(valor.toString())
      log('da aqui entao')
      if (valor === pessoaSelecionada) {
        log('ou aqui')
        this.retornoPessoa = retorno[i];
      }
    }
    log('da aqui');
    return this.retornoPessoa;
  }

  getHello(): string {
    return 'Login!';
  }
}

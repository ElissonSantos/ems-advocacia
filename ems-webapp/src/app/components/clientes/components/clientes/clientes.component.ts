import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteResource } from 'src/app/models/cliente.model';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ems-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [state('void', style({
      transform: 'translateX(-10%)', opacity: 0
    })),
    state('active', style({
      transform: 'translateX(0)',
      opacity: 1
    })),
    transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class ClientesComponent implements OnInit {

  listaClientes: ClienteResource[];
  cols: any;

  constructor (
    private readonly clienteService: ClienteService,
    ) {}

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'casos', header: 'Casos' },
      { field: 'telefone', header: 'Telefone' }
    ];
    this.pesquisa();
  }

  pesquisa() {
    this.clienteService.list()
      .subscribe(retorno => this.listaClientes = retorno);

    console.log(this.listaClientes);
  }
}

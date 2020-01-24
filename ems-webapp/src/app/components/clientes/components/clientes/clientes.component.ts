import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteResource } from 'src/app/models/cliente.model';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

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
  confirmDelete: boolean;

  constructor(
    private readonly clienteService: ClienteService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'opcoes', header: 'Opções' }
    ];
    this.init();
  }

  init() {
    this.confirmDelete = false;
    this.pesquisa();
  }

  pesquisa() {
    this.clienteService.list()
      .subscribe(retorno => this.listaClientes = retorno);
  }

  visualizarCliente(cliente: ClienteResource) {
    this.router.navigate(['/editCliente', { id: cliente.id, alt: false }]);
  }

  alterarCliente(cliente: ClienteResource) {
    this.router.navigate(['/editCliente', { id: cliente.id, alt: true }])
  }

  excluirCliente(cliente: ClienteResource) {
    this.clienteService.delete(cliente.id)
      .subscribe(() => {
        console.log('Cliente excluido com sucesso')
        this.init();
      })
  }
}

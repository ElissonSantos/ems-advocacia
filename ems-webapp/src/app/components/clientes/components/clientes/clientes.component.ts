import { Router } from '@angular/router';
import { FilterUtils, Message } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteResource } from 'src/app/models/cliente.model';

@Component({
  selector: 'ems-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {

  listaClientes: ClienteResource[];
  cols: any;
  confirmDelete: boolean;
  msgs: Message[];

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

    this.msgs = [];

    FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return parseInt(filter) > value;
    }

    this.init();
  }

  init() {
    this.confirmDelete = false;
    this.pesquisa();
  }

  pesquisa() {
    this.clienteService.list()
      .subscribe(res => {
        this.listaClientes = res
      },
        err => {
          this.msgs.push({ severity: 'error', summary: 'Ocorreu um erro ao pesquisar os clientes.' });
        });
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
        this.init();
      },
        err => {
          this.msgs.push({ severity: 'error', summary: 'Ocorreu um erro ao excluir o cliente.' });
        });
  }
}

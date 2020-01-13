import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteResource } from 'src/app/models/cliente.model';

@Component({
  selector: 'ems-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaCliente;

  constructor(private readonly clienteService: ClienteService) {
  }

  ngOnInit() {
    this.pesquisa();
  }

  pesquisa() {
    this.clienteService.list()
      .subscribe(retorno => this.listaCliente = retorno);
  }
}

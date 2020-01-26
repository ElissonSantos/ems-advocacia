import { Message } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { CasoResource } from 'src/app/models/caso.model';
import { CasoService } from 'src/app/services/caso.service';
import { ClienteResource, Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'ems-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.css']
})
export class EditClientesComponent implements OnInit {

  processos: CasoResource[];
  cliente: ClienteResource;
  cadastroForm: FormGroup;
  idCliente: any;
  cols: any[];
  msgs: Message[];
  editable: boolean;
  confirmDelete: boolean;

  ecpf: boolean;
  ecnpj: boolean;
  index: number;

  constructor(
    private fb: FormBuilder,
    private readonly clienteService: ClienteService,
    private readonly casoService: CasoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.cliente = {};
    this.cols = [
      { field: 'numero', header: 'Numero' },
      { field: 'area', header: 'Área' },
      { field: 'situacao', header: 'Situação' },
      { field: 'opcoes', header: 'Opções' }
    ];
    this.msgs = [];
    this.buildForms();

    this.route.params
      .subscribe(params => {
        // Verifica se é alterar ou visualizar
        if (params.alt === 'false') {
          this.editable = false;
        } else {
          this.editable = true;
        }
        // Salva o id do cliente
        this.idCliente = params.id;
        // Verifica se é Editar ou Adicionar Cliente
        if (this.idCliente) {
          this.clienteService.read(this.idCliente)
            .subscribe(cliente => {
              if (!cliente) { this.cancelarCadastro() }
              this.cliente = cliente;
              // Verificar
              if (cliente.cnpj === '0') { this.index = 0 }
              else { this.index = 1 }
              // Carregar form com o Cliente
              this.loadObjectToForm(cliente);
              // Se for apenas visualizar, desabilita o form
              if (!this.editable) {
                this.cadastroForm.disable();
              }
            });
          // Verifica os casos do cliente
          this.casoService.list(this.idCliente)
            .subscribe((processos: CasoResource[]) => {
              this.processos = processos;
            })
        } else {
          this.index = 0;
          this.cliente = null;
          this.buildForms();
        }
      });
  }

  buildForms() {
    this.cadastroForm = new FormGroup({
      'idCliente': new FormControl('' || this.cliente.id),
      'nomeCliente': new FormControl('' || this.cliente.nome, Validators.required),
      'emailCliente': new FormControl('' || this.cliente.email, Validators.required),
      'rgCliente': new FormControl(undefined || this.cliente.rg),
      'cpfCliente': new FormControl(undefined || this.cliente.cpf),
      'foneCliente': new FormControl(undefined || this.cliente.fone),
      'fone1Cliente': new FormControl('' || this.cliente.fone1),
      'enderecoCliente': new FormControl('' || this.cliente.endereco, Validators.required),
    });
  }

  get nome() { return this.cadastroForm.get('nomeCliente'); }
  get email() { return this.cadastroForm.get('emailCliente'); }
  get fone() { return this.cadastroForm.get('foneCliente'); }
  get endereco() { return this.cadastroForm.get('enderecoCliente'); }

  novoCliente() {
    const {
      idCliente, nomeCliente, emailCliente, rgCliente, cpfCliente,
      cnpj, foneCliente, fone1Cliente, enderecoCliente
    } = this.cadastroForm.value;

    const newCliente: Cliente = {
      cli_id: idCliente,
      cli_nome: nomeCliente,
      cli_email: emailCliente,
      cli_rg: rgCliente,
      cli_cpf: cpfCliente,
      cli_cnpj: cnpj,
      cli_fone: foneCliente,
      cli_fone1: fone1Cliente,
      cli_endereco: enderecoCliente
    }

    this.clienteService.insert(newCliente)
      .subscribe(() => {
        this.cancelarCadastro();
      },
        err => {
          this.msgs.push({ severity: 'error', summary: 'Ocorreu um erro ao salvar cliente.' });
        });
  }

  cancelarCadastro() {
    this.router.navigate(['/clientes']);
  }

  alterarCadastro() {
    this.cadastroForm.enable();
  }

  excluirCadastro() {
    this.clienteService.delete(this.idCliente)
      .subscribe(() => {
        this.router.navigate(['/clientes']);
      },
        err => {
          this.msgs.push({ severity: 'error', summary: 'Ocorreu um erro ao excluir o cliente.' });
        });
  }

  changeTab() {
    // this.testeForm.reset();
  }

  loadObjectToForm(cliente: ClienteResource) {
    this.cadastroForm.setValue({
      idCliente: cliente.id,
      nomeCliente: cliente.nome,
      emailCliente: cliente.email,
      rgCliente: cliente.rg,
      cpfCliente: cliente.cpf,
      foneCliente: cliente.fone,
      fone1Cliente: cliente.fone1,
      enderecoCliente: cliente.endereco,
    });
  }
}

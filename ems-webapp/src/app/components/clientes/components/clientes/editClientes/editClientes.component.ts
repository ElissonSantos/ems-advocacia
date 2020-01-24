import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CasoResource } from 'src/app/models/caso.model';
import { CasoService } from 'src/app/services/caso.service';
import { ClienteResource, Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'ems-editClientes',
  templateUrl: './editClientes.component.html',
  styleUrls: ['./editClientes.component.css']
})
export class EditClientesComponent implements OnInit {

  processos: CasoResource[];
  cliente: ClienteResource;
  cadastroForm: FormGroup;
  testeForm: FormGroup;
  idCliente: any;
  cols: any[];
  msgs: string;
  editable: boolean;

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
    this.msgs = '';
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
    this.cadastroForm = this.fb.group({
      idCliente: ['' || this.cliente.id],
      nomeCliente: ['' || this.cliente.nome, Validators.required],
      emailCliente: ['' || this.cliente.email, Validators.required],
      rgCliente: [undefined || this.cliente.rg],
      cpfCliente: [undefined || this.cliente.cpf],
      foneCliente: [undefined || this.cliente.fone, Validators.required],
      fone1Cliente: ['' || this.cliente.fone1],
      enderecoCliente: ['' || this.cliente.endereco, Validators.required]
    });
  }

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
          this.msgs = 'Ocorreu um erro ao salvar cliente.'
        });
  }

  cancelarCadastro() {
    this.router.navigate(['/clientes']);
  }

  alterar() {
    this.cadastroForm.enable();
  }

  delete() {
    console.log('deletaar');
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

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CasoResource } from 'src/app/models/caso.model';
import { CasoService } from 'src/app/services/caso.service';
import { ClienteResource, Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'ems-editClientes',
  templateUrl: './editClientes.component.html',
  styleUrls: ['./editClientes.component.css']
})
export class EditClientesComponent implements OnInit {

  processos: CasoResource[];
  cliente: ClienteResource;
  cadastroForm: FormGroup;
  idCliente: any;
  cols: any[];
  msgs: string;
  editable: boolean;

  ecpf: boolean;
  ecnpj: boolean;
  textoAlterado: string;
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
    this.buildForms();
    this.cols = [
      { field: 'numero', header: 'Numero' },
      { field: 'area', header: 'Área' },
      { field: 'situacao', header: 'Situação' },
      { field: 'opcoes', header: 'Opções' }
    ];

    this.editable = false;
    this.ecpf = false;
    this.ecnpj = false;
    this.msgs = '';

    this.cadastroForm.disable();

    this.route.params
      .subscribe(params => {
        this.idCliente = params.id;
        this.editable = params.alt;

        // Verifica se é Editar ou Adicionar Cliente
        if (this.idCliente) {
          this.clienteService.read(this.idCliente)
            .subscribe(cliente => {
              if (!cliente) { this.cancelarCadastro() }
              this.cliente = cliente;
              if (cliente.cnpj === '0') { this.index = 0 }
              else { this.index = 1 }
              // this.loadObjectToForm(this.cliente);
              if (this.editable === false) {
                console.log('this.editable deu fake')
                this.cadastroForm.disable();
              }
            });
        } else {
          this.index = 0;
          this.cliente = null;
        }
      });
  }

  buildForms() {
    this.cadastroForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      rg: [undefined],
      cpf: [undefined],
      cnpj: [undefined],
      fone: [undefined, Validators.required],
      fone1: [''],
      endereco: ['', Validators.required]
    });
  }

  novoCliente() {
    const { id, nome, email, rg, cpf, cnpj, fone, fone1, endereco } = this.cadastroForm.value;

    const newCliente: Cliente = {
      cli_id: id,
      cli_nome: nome,
      cli_email: email,
      cli_rg: rg,
      cli_cpf: cpf,
      cli_cnpj: cnpj,
      cli_fone: fone,
      cli_fone1: fone1,
      cli_endereco: endereco
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
    this.cadastroForm.reset();
  }

  loadObjectToForm(cliente: ClienteResource) {
    console.log('log dentro do load')
    console.log(cliente)
    // this.cadastroForm.get('nome').setValue('Valor')
    // this.cadastroForm.setValue({
    //   id: cliente.id,
    //   nome: cliente.nome,
    //   email: cliente.email,
    //   rg: cliente.rg,
    //   cpf: cliente.cpf,
    //   cnpj: cliente.cnpj,
    //   fone: cliente.fone,
    //   fone1: cliente.fone1,
    //   endereco: cliente.endereco
    // });
  }
}

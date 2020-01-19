import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CasoResource } from 'src/app/models/caso.model';
import { CasoService } from 'src/app/services/caso.service';
import { ClienteResource } from 'src/app/models/cliente.model';
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
  idCliente: any;
  cols: any[];

  constructor(
    private fb: FormBuilder,
    private readonly clienteService: ClienteService,
    private readonly casoService: CasoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.buildForms();
    this.cols = [
      { field: 'numero', header: 'Numero' },
      { field: 'area', header: 'Área' },
      { field: 'situacao', header: 'Situação' },
      { field: 'opcoes', header: 'Opções' }
    ];

    this.route.params.subscribe(x => {
      this.idCliente = x.id;
    });

    if (this.idCliente) {
      this.clienteService.read(this.idCliente)
        .subscribe(cliente => {
          this.cliente = cliente;
        });
      if (!this.cliente) {
        this.cancelarCadastro();
      }
      this.loadObjectToForm(this.cliente);
      this.cadastroForm.disable();
    } else {
      this.cliente = null;
    }
  }

  buildForms() {
    this.cadastroForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      email: [''],
      rg: [undefined, Validators.required],
      cpf: [undefined, Validators.required],
      fone: [undefined, Validators.required],
      fone1: [undefined],
      endereco: ['', Validators.required]
    });
  }

  novoCliente() {
    const { id, nome, email, rg, cpf, fone, fone1, endereco } = this.cadastroForm.value;

    console.log(this.cadastroForm.valid)

    const newCliente: ClienteResource = {
      id: id,
      nome: nome,
      email: email,
      rg: rg,
      cpf: cpf,
      fone: fone,
      fone1: fone1,
      endereco: endereco
    }

    console.log(newCliente);

    // this.clienteService.insert(newCliente)
    //   .subscribe(() => {
    //     console.log('adiciondo Com Sucesso');
    //   });
  }

  cancelarCadastro() {
    this.router.navigate(['/clientes']);
  }

  loadObjectToForm(cliente: ClienteResource) {
    this.cadastroForm.setValue({
      id: cliente.id,
      nome: cliente.nome,
      rg: cliente.rg,
      cpf: cliente.cpf,
      fone: cliente.fone,
      fone1: cliente.fone1,
      endereco: cliente.endereco
    });
  }
}

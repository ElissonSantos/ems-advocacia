export interface Cliente {
  cli_id?: string;
  cli_nome?: string;
  cli_email?: string;
  cli_rg?: number;
  cli_cpf?: number;
  cli_cnpj?: number;
  cli_fone?: number;
  cli_fone1?: number;
  cli_endereco?: string;
}

export interface ClienteResource {
  id?: string;
  nome?: string;
  email?: string;
  rg?: number;
  cpf?: number;
  cnpj?: number;
  fone?: number;
  fone1?: number;
  endereco?: string;
}

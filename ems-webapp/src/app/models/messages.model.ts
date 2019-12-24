export interface Message {
  mes_id?: number;
  mes_titulo?: string;
  mes_texto?: string;
  mes_datainit?: Date;
  mes_dataend?: Date;
}

export interface MessageResource {
  id?: number;
  titulo?: string;
  texto?: string;
  dataInicio?: Date;
  dataFim?: Date;
}

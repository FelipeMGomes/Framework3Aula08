import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilaService {

  public _showBotoes: boolean = true;
  public _showAtendimento: boolean ;
  public _showAdmin: boolean ;
  public tipo_servico: number;
  public tipo_fila: string;
  public fila0: number = 0;
  public fila1: number = 0;
  public fila2: number = 0;
  public totalFilas: number = 0;
  public posicaoAtual: number = 0;

  get showBotoes(): boolean{
    return this._showBotoes;
  }

  get showAtendimento(): boolean{
    return this._showAtendimento;
  }

  get showAdmin(): boolean{
    return this._showAdmin;
  }

  servico(serv: number): void{
    this.tipo_servico = serv;
    this._showBotoes = false;

    if(this.tipo_servico == 0){
      this.fila0++;
      this.tipo_fila = 'Coleta de exames';
      this._showAtendimento = true;
      this.posicaoAtual = this.fila0;
    }
    else if(this.tipo_servico == 1){
      this.fila1++;
      this.tipo_fila = 'Retirada de resultados';
      this._showAtendimento = true;
      this.posicaoAtual = this.fila1;
    }
    else if(this.tipo_servico == 2){
      this.fila2++;
      this.tipo_fila = 'Melhor Idade-Prioritário';
      this._showAtendimento = true;
      this.posicaoAtual = this.fila2;
    }
    else if(this.tipo_servico == 3){
      this._showAdmin = true;
      this.totalFilas = this.fila0 + this.fila1 + this.fila2;
    }
  }

  situacaoGeral(): Array<any> {
    let situacaoGeral: Array<any> = [
      this.fila0,
      this.fila1,
      this.fila2,
      this.totalFilas
    ];

    return situacaoGeral;
  }

  voltar(): void{
    this._showAdmin= false;
    this._showAtendimento = false;
    this._showBotoes = true;
  }

}

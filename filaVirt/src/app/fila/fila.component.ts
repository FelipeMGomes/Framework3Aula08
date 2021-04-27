import { Component, OnInit } from '@angular/core';
import { FilaService } from '../fila.service';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {

  private filaService = new FilaService();

  ngOnInit(): void {
  }

  get showBotoes(): boolean{
    return this.filaService.showBotoes;
  }

  get showAtendimento(): boolean{
    return this.filaService.showAtendimento;
  }
  
  get showAdmin(): boolean{
    return this.filaService.showAdmin;
  }

  administracao(): Array<any> {
    return this.filaService.situacaoGeral();
  }

  exibirTipoAtendimento(): string{
    return this.filaService.tipo_fila;
  }

  exibirPosicaoFila(): number{
    return this.filaService.posicaoAtual;
  }
  
  servico(serv: number): void{
    this.filaService.servico(serv);
  }

  voltar(): void{
    this.filaService.voltar();
  }

}

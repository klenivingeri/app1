import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: string

  public coracoes: Coracao[] = [new Coracao(true), new Coracao(true), new Coracao(true)]

  constructor() {
    //console.log(this.coracoes)
    
  }


  ngOnChanges(){// altera sempre que a class pai for atualizada
    console.log('tentativas recebidas do painel', this.tentativas)
  }

  ngOnInit() { // ciclo de vida do componente ganchos/ LifeCycle Hoocks
    //é inicializado uma unica vez na inicialização do componente
    
  }

}

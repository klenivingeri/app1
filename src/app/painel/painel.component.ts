import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public titulo: string =  'Traduza a frase:'
  public resposta: string = ''
  public tentativas: number = 3
    
  public rodada: number = 0 // controla o indice do frases[]
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() { 
    this.atualizaRodada()
   }

  ngOnInit() {}


  atualizaResposta(resposta: Event): void{
                /** faz parte de um Html Input Element ts */
    this.resposta  = (<HTMLInputElement>resposta.target).value   /** console.log(resposta.target.value)  assim é em js, mas o typescript nao reconhece */

    //console.log(this.resposta)
  }

  verificarResposta(){
    if(this.rodadaFrase.frasePtBr == this.resposta ){

      alert('A tradução esta correta!')

      this.rodada++ // aumenta +1 no indice
      this.atualizaRodada() //já passa a rodada +1 pro metodo / função o.O
      this.progresso =  this.progresso + (100 / this.frases.length) // conta oq tem no array e divide 100 e acrescenta
      console.log( this.progresso)
      this.resposta = ''

       // passando a frase com um indice acima para o objeto
    } else{
      alert('A tradução esta incorreta!')
      // diminui a variavel de tentativas
      this.tentativas--
      
      
      if(this.tentativas === -1){
        alert('Você perdeu todas as tentativas')
      }
    }
    
  }

  atualizaRodada(){
    // pega o indice do array e passa o que estiver contido para a variavel rodadaFrase
    this.rodadaFrase = this.frases[this.rodada]
    //console.log(this.rodadaFrase)

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  atualizacoes = [
    { titulo: 'Nova aula de Yoga no Piqueri', descricao: 'Aos sábados às 9h com grupo voluntário.' },
    { titulo: 'Reforma na Praça Rotary', descricao: 'Novos aparelhos de ginástica foram instalados.' },
    { titulo: 'Corrida noturna no CERET', descricao: 'Treinos abertos nas terças e quintas às 20h.' }
  ];
  
}

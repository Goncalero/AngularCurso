import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  //Dentro del template se ponen "backstick" `` para meter lo que queramos
  //USAMOS templateUrl PARA TRAERNOS ESE TEMPLATE DE OTRO ARCHIVO
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',

  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CounterPageComponent{

  counter = 10;

  //SE TRABAJA CON SEÑALES PORQUE ES MAS RÁPIDO A LA HORA DE CAMBIOS DE ESTADO
  counterSignal = signal(10);


  constructor(){
    setInterval(() => {

      this.counterSignal.update((valor) => valor + 1)
      console.log('Tick');
    }, 2000)
  }


  increasedBy(value: number){
    this.counter += value;  //ES LO MISMO QUE (this.counter + value)
    this.counterSignal.update( (current) => current + value)
  }

  decrementBy(value:number){
    this.counter -= value;
    this.counterSignal.update( (current) => current - value)

  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}



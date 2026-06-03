
import { Component, signal, computed} from '@angular/core';



interface Character{
  id:number
  name: string
  power:number
}

@Component({
  selector: 'selector-name',
  templateUrl: './dragonball-page.component.html'
})

export class DragonBallPageComponent {

  name = signal('Gohan')
  power = signal(100)

  characters = signal<Character[]>([
    { id:1, name:'Goku', power: 9001 },
    // { id:2, name:'Vegeta', power: 8000 },
    // { id:3, name:'Piccolo', power: 3000 },
    // { id:4, name:'Yamcha', power: 500 }
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  })

  /*
   SE CREA UN MÉTODO PARA CREAR UN PERSONAJE addCharacter()
   SI EL PERSONAJE NO TIENE NOMBRE O PODER, O SU PODER ES <0 HACE
   UN RETURN DE LA APP Y NO HACE NADA, EN CASO CONTRARIO, ME LO CREA
  */
  addCharacter(){
   if( !this.name() || !this.power() || this.power() <= 0 ) {
    return;
   }


   /*
    AL CREARMELO, ME LO AÑADE A LA LISTA QUE TENGO YA HECHA DE PERSONAJES
    LLAMADA Character[] Y ACTUALIZA DICHA LISTA Y ME MUESTRA EL PERSONAJE
    CREADO Y SU PODER Y LUEGO HACEMOS UN RESETEO DEL FORMULARIO CON resetFields
   */
   const newCharacter: Character = {
    id: this.characters().length +1,
    name: this.name(),
    power: this.power(),
   }

   this.characters.update((list) => [ ... list, newCharacter ])
   this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
})
export class DragonballCharacterAdd {


  name = signal('')
  power = signal(0)

  addCharacter(){
   if( !this.name() || !this.power() || this.power() <= 0 ) {
    return;
   }


   /*
    AL CREARMELO, ME LO AÑADE A LA LISTA QUE TENGO YA HECHA DE PERSONAJES
    LLAMADA Character[] Y ACTUALIZA DICHA LISTA Y ME MUESTRA EL PERSONAJE
    CREADO Y SU PODER Y LUEGO HACEMOS UN RESETEO DEL FORMULARIO CON resetFields()
   */
   const newCharacter: Character = {
    // id: this.characters().length +1,
    id:Math.floor(Math.random() * 1000),
    name: this.name(),
    power: this.power(),
   }

    //this.characters.update((list) => [ ... list, newCharacter ])
    console.log({newCharacter});
    this.resetFields()
  }

  resetFields() {
     this.name.set('')
     this.power.set(0)
  }
}

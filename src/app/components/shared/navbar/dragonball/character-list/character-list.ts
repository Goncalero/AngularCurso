import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {

  /*
    AQUI SE GUARDA MEDIANTE EL "input" LO QUE SE META EN EL FORMULARIO
    Y ADEMÁS LO PONEMOS COMO REQUERIDO CON EL "required"
    SE GUARDA DENTRO DE LA LISTA DE "Character[]" Y ESO SE LE ASIGNA
    A LA VARIABLE "characters"
  */
  characters = input.required<Character[]>();
  listName = input.required<string>();
}



import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


//ESTA ES OTRA FORMA DE HACER UNA FUNCIÓN
const loadFromLocalStorage = (): Character[] => {

  const characters = localStorage.getItem('characters')

    return characters ? JSON.parse(characters) : []
}

@Injectable({providedIn: 'root'})
export class DragonballService {

   characters = signal<Character[]> (loadFromLocalStorage());

  /*
    PARA QUE SE QUEDEN GUARDADOS LOS ESTADOS DE MIS PERSONAJES EN MI APP
    TENGO QUE GUARDARLOS EN LA MEMORIA LOCAL Y DISPARAR UN EFECTO
    ESE EFECTO LO GUARDA COMO UNA "clave-valor" o "key-value" Y SIEMPRE
    TIENE QUE SER UN String OBLIGATORIAMENTE.
    EN ESTE CASO COMO ES UN ARRAY DE PERSONAJES, SE UTILIZA UN CONVERSOR DE
    JSON "JSON.stringify" Y DENTRO DEL PARÉNTESIS METEMOS EL ARRAY DE
    LOS PERSONAJES EN FORMA DE singal() PARA QUE LOS CONVIERTA A String
  */
  saveToLocalStorage = effect( () => {

    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })


  /*
   SE CREA UN MÉTODO PARA CREAR UN PERSONAJE addCharacter()
   SI EL PERSONAJE NO TIENE NOMBRE O PODER, O SU PODER ES <0 HACE
   UN RETURN DE LA APP Y NO HACE NADA, EN CASO CONTRARIO, ME LO CREA
  */
  addCharacter(character: Character){
    this.characters.update((list) => [...list, character])
  }
}

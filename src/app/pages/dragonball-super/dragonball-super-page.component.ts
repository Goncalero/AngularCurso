
import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/shared/navbar/dragonball/character-list/character-list";
import { DragonballCharacterAdd } from "../../components/dragonball-character-add/dragonball-character-add";
import { DragonballService } from '../../services/dragonball.service';


@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList, DragonballCharacterAdd]
})

export class DragonBallSuperPageComponent {
  /*
    ESTO SIRVE PARA MANTENER EL ESTADO DE MI APLICACIÓN MEDIANTE
    INYECCIÓN DE DEPENDENCIAS (DI), SIGNIFICA QUE SI YO AGREGO
    UN NUEVO PERSONAJE, ESTE PERSONAJE QUEDA GUARDADO AUNQUE YO
    ME ESTÉ MOVIENDO ENTRE LAS DISTINTAS PESTAÑAS DE LA PÁGINA
  */
  public dragonballService = inject(DragonballService)
}

import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonBallPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonBallSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

  {
    /*
      AQUI SE ASIGNAN LAS RUTAS A LAS QUE VAN NUESTRO @COMPONENT
      EN ESTE CASO EL path: ES VACÍO PORQUE ES LA PÁGINA PRINCIPAL
    */
    path: '',
    component: CounterPageComponent,
  },

  {
    path: 'hero',
    component: HeroPageComponent
  },

  {
    path: 'dragonball',
    component:DragonBallPageComponent
  },

  {
    path: 'dragonball-super',
    component:DragonBallSuperPageComponent
  },

  {
    path: '**',
    redirectTo: '' //EN CASO DE METER UNA DIRECCIÓN NO VÁLIDA, TE REDIRIGE DONDE LE DIGAS
  },

];

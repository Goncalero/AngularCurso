import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

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
  }

];

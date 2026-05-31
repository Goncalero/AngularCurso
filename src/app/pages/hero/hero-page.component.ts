import { UpperCasePipe } from "@angular/common"
import { Component, computed, signal } from "@angular/core"


@Component({

selector: 'app-hero-page',
templateUrl: './hero-page.component.html',
imports: [ UpperCasePipe ] //IMPORTA LA PROPIEDAD PARA PONER PALABRAS EN MAYUSCULAS

})




export class HeroPageComponent{

  nameSignal = signal("Ironman")
  ageSignal = signal(45)

  heroDescription = computed(()=> {
    const description = `${this.nameSignal()} - ${this.ageSignal()} `
    return description
  })

  capitalizedName = computed(() => { this.nameSignal().toUpperCase })

  // getHeroDescription(): string {

  //   return `${ this.nameSignal() } - ${ this.ageSignal() }`
  // }


  changeHero(): void{
    this.nameSignal.set('Spiderman')
    this.ageSignal.set(22)
  }

  resetForm(){
    this.nameSignal.set('Ironman')
    this.ageSignal.set(45)
  }

  changeAge(){
    this.ageSignal.set(60)
  }
}





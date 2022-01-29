import { Component, OnInit } from '@angular/core'
import { PokeapiService } from './../../services/pokeapi.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  selectedPkm: any = 0
  nameFilter = ''

  get pokemonList() {
    return this.pokeapi.pokeList.filter((pokemon) => {
      return pokemon.name.indexOf(this.nameFilter) !== 1
    })
  }
  /* pokemonList = [
    { name: 'Bulbassaur', number: 1 },
    { name: 'Charmander', number: 4 },
    { name: 'Squirtle', number: 7 },
    { name: 'Pikachu', number: 25 },
  ]
*/
  get pkmSprint() {
    const number = ('000' + this.selectedPkm.number).slice(-3)
    return `//serebii.net/sunmoon/pokemon/${number}.png`
  }
  constructor(private pokeapi: PokeapiService) {}

  ngOnInit(): void {}

  selectPokemon(pkm: any) {
    this.selectedPkm = 0
    this.selectedPkm = pkm
  }
}

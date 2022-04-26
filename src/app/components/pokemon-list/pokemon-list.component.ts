import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/modal/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon/')
      .subscribe((response) => {
        this.pokemons = response.results;
        console.log(this.pokemons);
      });
  }
}

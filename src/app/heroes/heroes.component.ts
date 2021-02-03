import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HEROES } from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes = HEROES;
    selectedHero: Hero;

    constructor(SelectedHero: selectedHero) {}

    ngOnInit() {}

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }     from './hero.service';

@Component({
    moduleId:module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];
    selectedHero: Hero;
    
    constructor(private _router: Router,
                private _heroService: HeroService) {}

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
    
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    gotoDetail() {
        let link = ['HeroDetail', {id: this.selectedHero.id}];
        this._router.navigate(link);
    }
}
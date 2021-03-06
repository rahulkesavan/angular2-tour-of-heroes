import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl : 'hero-detail.component.html',
  styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero:Hero;
    
    constructor(private _heroService: HeroService,
                private _routeParams: RouteParams) {
    }
    
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
              .then(hero => this.hero = hero);
    }
    
    goBack() {
        window.history.back();
    }
}
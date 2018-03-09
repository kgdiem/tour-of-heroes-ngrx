import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import * as fromRoot from '../store/hero.reducer';
import * as hero from '../store/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private store: Store<fromRoot.State>) {
    this.heroes = [];
    this.getHeroes();
  }

  setHeroes(){
    this.heroes$ = this.store.select(fromRoot.getHeroes);
  }

  ngOnInit() {
    this.setHeroes();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  getHeroes() {
    this.store.dispatch(new hero.Load);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });

    this.getHeroes();
    this.setHeroes();
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  logHeroes(): void {
    console.log(this.heroes$);
  }

}
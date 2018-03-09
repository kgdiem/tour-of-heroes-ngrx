import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { async } from 'rxjs/scheduler/async';
import { Scheduler } from 'rxjs/Scheduler';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import { HeroService } from '../hero.service';
import { HeroActionTypes } from './hero.actions';
import * as heroActions from './hero.actions';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

@Injectable()
export class HeroEffects {

  @Effect()
  load$ = this.actions$
    .ofType(HeroActionTypes.Load)
    .debounceTime(this.debounce, this.scheduler || async)
    .pipe(
      map((action: heroActions.Load) => action),
      switchMap(action => {
        const nextLoad$ = this.actions$
          .ofType(HeroActionTypes.Load)
          .skip(1);

        return this.heroService
          .getHeroes()
          .takeUntil(nextLoad$)
          .pipe(
            map(res => new heroActions.LoadComplete(res)),
            catchError(err => of(new heroActions.LoadError(err)))
          );
      })
    );

    constructor(
      private actions$: Actions,
      private heroService: HeroService,
      @Optional()
      @Inject(SEARCH_DEBOUNCE)
      private debounce: number = 300,
      @Optional()
      @Inject(SEARCH_SCHEDULER)
      private scheduler: Scheduler
    ) {}
}

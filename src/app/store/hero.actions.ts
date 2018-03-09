import { Action } from '@ngrx/store';

import { Hero } from '../hero';

export type Model = Hero;

export enum HeroActionTypes {
  Add = '[Hero] Add', //Add hero
  AddComplete = '[Hero] Add Complete', //Done adding
  AddError = '[Hero] Add Error', //Error adding
  Search = '[Hero] Search', //Search hero
  SearchComplete = '[Hero] Search Complete', //Done searching
  SearchError = '[Hero] Search Error', //Error searching
  Load = '[Hero] Load', //Load heroes
  LoadComplete = '[Hero] Load Complete', //Done loading
  LoadError = '[Hero] Load Error', //Error loading
  Save = '[Hero] Save', //Update hero
  SaveComplete = '[Hero] Save Complete', //Done updating
  SaveError = '[Hero] Save Error', //Error updating
  Remove = '[Hero] Remove', //Delete hero
  RemoveComplete = '[Hero] Remove Complete', //Done deleting
  RemoveError = '[Hero] Remove Error', //Error deleting
}

export class Create implements Action {
  readonly type = HeroActionTypes.Add;
  
  constructor(public payload: Hero) {}
}

export class CreateComplete implements Action {
  readonly type = HeroActionTypes.AddComplete;

  constructor(public payload: Hero) {}
}

export class CreateError implements Action {
  readonly type = HeroActionTypes.AddError;

  constructor(public payload: any) {}
}

export class Search implements Action {
  readonly type = HeroActionTypes.Search;

  constructor(public payload?: string) {}
}

export class SearchComplete implements Action {
  readonly type = HeroActionTypes.SearchComplete;

  constructor(public payload: Hero[]) {}
}

export class SearchError implements Action {
  readonly type = HeroActionTypes.SearchError;

  constructor(public payload: any) {}
}

export class Load implements Action {
  readonly type = HeroActionTypes.Load;
}

export class LoadComplete implements Action {
  readonly type = HeroActionTypes.LoadComplete;

  constructor(public payload: Hero[]) {}
}

export class LoadError implements Action {
  readonly type = HeroActionTypes.LoadError;

  constructor(public payload: any) {}
}

export class Update implements Action {
  readonly type = HeroActionTypes.Save;

  constructor(public payload: Hero) {}
}

export class UpdateComplete implements Action {
  readonly type = HeroActionTypes.SaveComplete;

  constructor(public payload: Hero) {}
}

export class UpdateError implements Action {
  readonly type = HeroActionTypes.SaveError;

  constructor(public payload: any) {}
}

export class Remove implements Action {
  readonly type = HeroActionTypes.Remove;

  constructor(public payload: Hero) {}
}

export class RemoveComplete implements Action {
  readonly type = HeroActionTypes.RemoveComplete;

  constructor(public payload: Hero) {}
}

export class RemoveError implements Action {
  readonly type = HeroActionTypes.RemoveError;

  constructor(public payload: any) {}
}

export type HeroActions =
| Create
| CreateComplete
| CreateError
| Search
| SearchComplete
| SearchError
| Load
| LoadComplete
| LoadError
| Update
| UpdateComplete
| UpdateError
| Remove
| RemoveComplete
| RemoveError;

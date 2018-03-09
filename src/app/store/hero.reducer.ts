import { HeroActions, HeroActionTypes } from './hero.actions';
import { Hero } from '../hero';

export interface State {
  ids: number[];
  entities: { [id: number]: Hero };
  heroes: Hero[];
  selectedHeroId: number | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  heroes: [],
  selectedHeroId: null
};

export function reducer(state = initialState, action: HeroActions): State {
  switch(action.type) {
    case HeroActionTypes.Load: {
      return state;
    }

    case HeroActionTypes.LoadComplete: {
      const heroes: Hero[] = action.payload;

      const ids = new Array<number>(heroes.length);
      const entities = {};

      heroes.map(hero => {
        ids.push(hero.id);
        entities[hero.id] = hero;
      });

      return {
        ids: ids,
        entities: entities,
        heroes: heroes,
        ...state
      };
    }

    default:
      return state;
  }
}

export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getSelectedId = (state: State) => state.selectedHeroId;
export const getHeroes = (state: State) => state.heroes;

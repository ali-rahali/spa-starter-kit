import { Hero } from './../models/Hero';
import { environment } from '../../../../environment';
import { HEROES } from './../mock/MockHeroes';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    getHeroes():any {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly():any {
        return new Promise<Hero[]>((resolve:any) =>
            setTimeout(() => resolve(HEROES), 2000)
        );
    }

    getHero(id: number):any {
        return this.getHeroes()
            .then((heroes:Hero[]) => heroes.filter((hero:Hero) => hero.id == id)[0]);
    }
}

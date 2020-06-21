import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  getHeroes(): Hero[] {
    this.messageService.add('HeroService: fetched heroes');
    return HEROES;
  }


  getHero(id: number): Hero {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return HEROES.find(hero => hero.id === id);
  }
  constructor(private messageService: MessageService) { }

}







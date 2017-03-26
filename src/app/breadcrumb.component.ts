// import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

@Component({
    selector: 'breadcrumb-navigation', moduleId: module.id,
    templateUrl: './breadcrumb.component.html',
    providers: [HeroService],
    styleUrls: ['breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    @Input()
    hero: Hero;

    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}
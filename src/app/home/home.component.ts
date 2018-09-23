import { Component, OnInit, Input } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('currentTechnologyState', [
            transition('* => *', [
                style({ opacity: 0 }),
                animate('750ms ease-in', style({ opacity: 1 }))
            ])
        ])
    ]
})
export class HomeComponent {
    currentIndex = 0;
    technologies = [
        'iOS applications',
        'web applications',
        'RESTful APIs',
        'CI/CD pipelines',
        'chat bots',
        'Swift libraries'
    ];

    currentTechnology = this.technologies[this.currentIndex];

    constructor() {
        setInterval(() => this.changeTechnology(), 2000);
    }

    changeTechnology() {
        this.currentIndex = (this.currentIndex + 1 >= this.technologies.length) ? 0 : this.currentIndex + 1;
        this.currentTechnology = this.technologies[this.currentIndex];
    }
}

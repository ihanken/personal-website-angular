import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: 'app-navbar.component.html',
    styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent {
    constructor(private readonly router: Router) {}

    navigateToHome() {
        this.router.navigateByUrl('');
    }
}

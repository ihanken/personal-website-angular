import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCardComponent } from './github-card.component';

describe('GithubCardComponent', () => {
    let component: GithubCardComponent;

    beforeEach(() => {
        component = new GithubCardComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit()', () => {
        it('should do nothing', () => {
            component.ngOnInit();
            expect(true).toBeTruthy();
        });
    });
});

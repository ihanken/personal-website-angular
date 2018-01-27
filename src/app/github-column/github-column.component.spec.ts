import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubColumnComponent } from './github-column.component';

describe('GithubColumnComponent', () => {
    let component: GithubColumnComponent;

    beforeEach(() => {
        component = new GithubColumnComponent();
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

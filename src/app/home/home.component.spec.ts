import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;

    beforeEach(() => {
        component = new HomeComponent();
    });

    it('should create', (done) => {
        expect(component).toBeTruthy();

        setInterval(() => done(), 2000);
    });

    describe('changeTechnology()', () => {
        it('should change current technology to the next technology', () => {
            expect(component.currentTechnology).toEqual(component.technologies[0]);

            component.changeTechnology();
            expect(component.currentTechnology).toEqual(component.technologies[1]);

            component.currentIndex = 10000;
            component.changeTechnology();
            expect(component.currentTechnology).toEqual(component.technologies[0]);
        });
    });
});

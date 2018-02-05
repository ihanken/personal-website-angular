import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;

    beforeEach(() => {
        component = new HomeComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit()', () => {
        it('should set current technology to the first technology in technologies', () => {
            component.ngOnInit();
            expect(component.currentTechnology).toEqual(component.technologies[0]);
        });
    });

    describe('changeTechnology()', () => {
        it('should change current technology to the next technology', () => {
            component.ngOnInit();
            expect(component.currentTechnology).toEqual(component.technologies[0]);

            component.changeTechnology();
            expect(component.currentTechnology).toEqual(component.technologies[1]);
        });
    });
});

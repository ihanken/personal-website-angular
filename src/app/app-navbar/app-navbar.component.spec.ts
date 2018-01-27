import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppNavbarComponent } from './app-navbar.component';

describe('AppNavbarComponent', () => {
    let component: AppNavbarComponent;

    beforeEach(() => {
        component = new AppNavbarComponent();
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

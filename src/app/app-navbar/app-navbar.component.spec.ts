import { AppNavbarComponent } from './app-navbar.component';

describe('AppNavbarComponent', () => {
    let component: AppNavbarComponent;
    const routerMock = {
        navigateByUrl: jest.fn()
    };

    beforeEach(() => {
        component = new AppNavbarComponent(routerMock as any);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('navigateToHome()', () => {
        it('should navigate to the base url via the router', () => {
            const navigationSpy = jest.spyOn(routerMock, 'navigateByUrl');

            component.navigateToHome();
            expect(navigationSpy).toHaveBeenCalled();
        });
    });
});

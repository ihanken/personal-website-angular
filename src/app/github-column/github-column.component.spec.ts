import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubColumnComponent } from './github-column.component';
import { GithubRepo } from '../models/github-repo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('GithubColumnComponent', () => {
    let component: GithubColumnComponent;

    const githubServiceMock = {
        getUserRepositories: jest.fn()
    };

    beforeEach(() => {
        component = new GithubColumnComponent(githubServiceMock as any);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit()', () => {
        it('should set repos', () => {
            const mockRepoOne = new GithubRepo();
            const mockRepoTwo = new GithubRepo();
            const mockRepoThree = new GithubRepo();

            mockRepoOne.stars = 1;
            mockRepoTwo.stars = 2;
            mockRepoThree.stars = 3;

            const mockRepoData = [ mockRepoOne, mockRepoThree, mockRepoTwo ];

            githubServiceMock.getUserRepositories = jest.fn(() => Observable.of(mockRepoData));
            component.ngOnInit();
        });
    });
});

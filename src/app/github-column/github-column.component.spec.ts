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
        it('should sort repos by stars', () => {
            const mockRepoOne = new GithubRepo();
            const mockRepoTwo = new GithubRepo();
            const mockRepoThree = new GithubRepo();

            mockRepoOne.stargazers_count = 1;
            mockRepoTwo.stargazers_count = 2;
            mockRepoThree.stargazers_count = 3;
            mockRepoOne.forks = 1;
            mockRepoTwo.forks = 1;
            mockRepoThree.forks = 1;
            mockRepoOne.name = "a";
            mockRepoTwo.name = "a";
            mockRepoThree.name = "a";

            const mockRepoData = [ mockRepoOne, mockRepoThree, mockRepoTwo ];

            githubServiceMock.getUserRepositories = jest.fn(() => Observable.of(mockRepoData));
            component.ngOnInit();
        });

        it('should sort repos by forks', () => {
            const mockRepoOne = new GithubRepo();
            const mockRepoTwo = new GithubRepo();
            const mockRepoThree = new GithubRepo();

            mockRepoOne.stargazers_count = 1;
            mockRepoTwo.stargazers_count = 1;
            mockRepoThree.stargazers_count = 1;
            mockRepoOne.forks = 1;
            mockRepoTwo.forks = 2;
            mockRepoThree.forks = 3;
            mockRepoOne.name = "a";
            mockRepoTwo.name = "a";
            mockRepoThree.name = "a";

            const mockRepoData = [ mockRepoOne, mockRepoThree, mockRepoTwo ];

            githubServiceMock.getUserRepositories = jest.fn(() => Observable.of(mockRepoData));
            component.ngOnInit();
        });

        it('should sort repos by name', () => {
            const mockRepoOne = new GithubRepo();
            const mockRepoTwo = new GithubRepo();
            const mockRepoThree = new GithubRepo();

            mockRepoOne.stargazers_count = 1;
            mockRepoTwo.stargazers_count = 1;
            mockRepoThree.stargazers_count = 1;
            mockRepoOne.forks = 1;
            mockRepoTwo.forks = 1;
            mockRepoThree.forks = 1;
            mockRepoOne.name = "a";
            mockRepoTwo.name = "b";
            mockRepoThree.name = "c";

            const mockRepoData = [ mockRepoOne, mockRepoThree, mockRepoTwo ];

            githubServiceMock.getUserRepositories = jest.fn(() => Observable.of(mockRepoData));
            component.ngOnInit();
        });
    });
});

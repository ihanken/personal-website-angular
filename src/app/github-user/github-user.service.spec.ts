import { TestBed, inject } from '@angular/core/testing';

import { GithubUserService } from './github-user.service';
import { GithubUser } from '../models/github-user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';
import { ResponseOptions, Response } from '@angular/http';
import { GithubRepo } from '../models/github-repo';

describe('GithubUserService', () => {
    let service: GithubUserService;

    const githubUsers = [
        new GithubUser(),
        new GithubUser(),
        new GithubUser()
    ];

    const githubRepositories = [
        new GithubRepo(),
        new GithubRepo(),
        new GithubRepo()
    ];

    const mockGithubColumnService = {
        getHeaders: jest.fn(),
        get: jest.fn()
    };

    beforeEach(() => {
        service = new GithubUserService(mockGithubColumnService as any);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    describe('getUsers()', () => {
        it('should return an array of GithubUsers', () => {
            mockGithubColumnService.get = jest.fn(() => Observable.from([
                new Response(new ResponseOptions({
                    body: {
                        data: githubUsers
                    }
                }))]
            ));

            service.getUsers().subscribe(users => {
                expect(users).toEqual({ data: githubUsers });
            });

            service.getUsers('filter').subscribe(users => {
                expect(users).toEqual({ data: githubUsers });
            });
        });

        it('should throw an error if present', () => {
            const error = 'Error in getUsers!';
            mockGithubColumnService.get = jest.fn(() => Observable.throw(error));

            service.getUsers().subscribe(users => {
                fail(error);
            }, err => {
                expect(err).toEqual(error);
            });

            service.getUsers('filter').subscribe(users => {
                fail(error);
            }, err => {
                expect(err).toEqual(error);
            });
        });
    });

    describe('getUserRepositories()', () => {
        it('should return an array of GithubUsers', () => {
            mockGithubColumnService.get = jest.fn(() => Observable.from([
                new Response(new ResponseOptions({
                    body: {
                        data: githubRepositories
                    }
                }))]
            ));

            service.getUserRepositories('test').subscribe(repos => {
                expect(repos).toEqual({ data: githubRepositories });
            });
        });

        it('should throw an error if present', () => {
            const error = 'Error in getUserRepositories!';
            mockGithubColumnService.get = jest.fn(() => Observable.throw(error));

            service.getUserRepositories('test').subscribe(
                users => {
                    fail(error);
                },
                err => {
                    expect(err).toEqual(error);
                }
            );
        });
    });
});

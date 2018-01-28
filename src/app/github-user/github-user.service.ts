import { Observable } from 'rxjs/Observable';
import { GithubUser } from '../models/github-user';
import { Injectable } from '@angular/core';
import { GithubColumnService } from '../github-column/github-column.service';
import { GithubRepo } from '../models/github-repo';

@Injectable()
export class GithubUserService {
    constructor(private githubColumnService: GithubColumnService) {
    }

    getUsers(filter?: string): Observable<GithubUser[]> {
        let endPoint = '/users';

        if (filter) {
            endPoint += '/' + filter;
        }

        return this.githubColumnService.get(endPoint).map(res => res.json() as GithubUser[]).catch(err => Observable.throw(err));
    }

    getUserRepositories(user: string): Observable<GithubRepo[]> {
        const endPoint = '/users/' + user + '/repos';

        return this.githubColumnService.get(endPoint).map(res => res.json() as GithubRepo[]).catch(err => Observable.throw(err));
    }
}

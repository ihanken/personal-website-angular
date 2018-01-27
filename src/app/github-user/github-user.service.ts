import { Observable } from "rxjs";
import { GithubUser } from "../models/github-user";
import { Injectable } from "@angular/core";
import { GithubColumnService } from "../github-column/github-column.service";
import { GithubRepo } from "../models/github-repo";

@Injectable()
export class GithubUserService {
    constructor(private api: GithubColumnService) {
    }

    getUsers(filter?: string): Observable<GithubUser[]> {
        let endPoint = '/users';

        if (filter) {
            endPoint += '/' + filter;
        }

        return this.api.get(endPoint).map(res => res.json() as GithubUser[]).catch(err => Observable.throw(err));
    }

    search(q: string): Observable<any> {
        let endPoint = '/search/users?q=' + q;

        return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));
    }

    getUserFollowers(user: string): Observable<any> {
        let endPoint = '/users/' + user + '/followers';

        return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));
    }

    getUserRepositories(user: string): Observable<GithubRepo[]> {
        let endPoint = '/users/' + user + '/repos';

        return this.api.get(endPoint).map(res => res.json() as GithubRepo[]).catch(err => Observable.throw(err));
    }
}

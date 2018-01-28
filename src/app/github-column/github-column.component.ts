import { Component, OnInit } from '@angular/core';
import { GithubColumnService } from './github-column.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GithubUserService } from '../github-user/github-user.service';
import { GithubUser } from '../models/github-user';
import { GithubRepo } from '../models/github-repo';

@Component({
    selector: 'app-github-column',
    templateUrl: './github-column.component.html',
    styleUrls: ['./github-column.component.css']
})
export class GithubColumnComponent implements OnInit {
    private repos: Array<GithubRepo>;

    constructor(private githubUserService: GithubUserService) { }

    ngOnInit() {
        this.githubUserService.getUserRepositories('ihanken').subscribe(repos => {
            repos.sort((a, b) => {
                return a.stars < b.stars ? -1 : 1;
            });

            this.repos = repos;
        });
    }
}

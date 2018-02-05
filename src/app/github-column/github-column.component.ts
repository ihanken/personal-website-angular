import { Component, OnInit } from '@angular/core';
import { GithubColumnService } from './github-column.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GithubUserService } from '../github-user/github-user.service';
import { GithubUser } from '../models/github-user';
import { GithubRepo } from '../models/github-repo';
import * as GeoPattern from 'geopattern';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'app-github-column',
    templateUrl: './github-column.component.html',
    styleUrls: ['./github-column.component.css']
})
export class GithubColumnComponent implements OnInit {
    repos: Array<GithubRepo>;

    constructor(private githubUserService: GithubUserService, private _DomSanitizationService: DomSanitizer) { }

    ngOnInit() {
        Observable.forkJoin(
            this.githubUserService.getUserRepositories('ihanken'),
            this.githubUserService.getUserRepositories('froghat')
        ).subscribe(res => {
            this.repos = res[0].concat(res[1]);

            this.repos.forEach(repo => {
                repo.geopattern_url = GeoPattern.generate(repo.html_url).toDataUrl().toString();
            });

            this.repos.sort((a, b) => {
                if (a.stargazers_count > b.stargazers_count) {
                    return -1;
                }
                else if (a.stargazers_count < b.stargazers_count) {
                    return 1;
                }
                else {
                    if (a.forks > b.forks) {
                        return -1;
                    }
                    else if (a.forks < b.forks) {
                        return 1;
                    }
                    else {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return -1;
                        }
                        else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    }
                }
            });
        });
    }
}

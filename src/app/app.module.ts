import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { GithubCardComponent } from './github-card/github-card.component';
import { HomeComponent } from './home/home.component';
import { GithubColumnComponent } from './github-column/github-column.component';
import { GithubColumnService } from './github-column/github-column.service';
import { GithubUserService } from './github-user/github-user.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    GithubCardComponent,
    HomeComponent,
    GithubColumnComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GithubColumnService, GithubUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

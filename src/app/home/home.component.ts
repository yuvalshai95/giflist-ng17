import { Component, inject } from '@angular/core';
import { GifListComponent } from './ui/gif-list.component';
import { RedditService } from '../shared/data-access/reddit.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchBarComponent } from './ui/search-bar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  imports: [GifListComponent, InfiniteScrollModule, SearchBarComponent, MatProgressSpinnerModule],
  selector: 'app-home',
  template: `
    <app-search-bar [subredditFormControl]="redditService.subredditFormControl"></app-search-bar>

    @if (redditService.loading()){
    <mat-progress-spinner mode="indeterminate" diameter="50" />
    } @else {
    <app-gif-list
      [gifs]="redditService.gifs()"
      infiniteScroll
      (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
      class="grid-container"
    />
    }
  `,
})
export default class HomeComponent {
  redditService = inject(RedditService);
}

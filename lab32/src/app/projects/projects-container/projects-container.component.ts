import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Project } from '../shared/project.model';
import { Subject, Subscription, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import {
  getError,
  getLoading,
  getProjects,
  getSaving,
} from '../shared/state/project.reducer';
import { load, save } from '../shared/state/project.actions';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsContainerComponent implements OnInit, OnDestroy {
  projects$ = this.store.pipe(select(getProjects));
  errorMessage$ = this.store.pipe(select(getError));
  loading$ = this.store.pipe(select(getLoading));
  saving$ = this.store.pipe(select(getSaving));
  private searchTerms = new Subject<string>();
  private subscription!: Subscription;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.observeSearchTerms();
    this.store.dispatch(load({ name: '' }));
  }

  onSearch(term: string) {
    this.searchTerms.next(term);
  }

  observeSearchTerms() {
    this.subscription = this.searchTerms
      .pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => {
          this.store.dispatch(load({ name: term }));
          return of(term);
        })
      )
      .subscribe();
  }

  onSaveListItem(event: any) {
    const project: Project = event.item;
    this.store.dispatch(save({ project }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MediaWatcherService {
  constructor(private breakPointObserver: BreakpointObserver) {}

  // returns boolean which shows if the query matches the window breakpoint size
  matchMedia(query: string): Observable<boolean> {
    return this.breakPointObserver.observe([query]).pipe(
      map((state: BreakpointState) => {
        return state.matches;
      })
    );
  }
}

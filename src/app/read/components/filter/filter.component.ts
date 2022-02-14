import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  inputFocus = false;

  onSearch(value: string) {
    this.search.emit(value);
  }
}

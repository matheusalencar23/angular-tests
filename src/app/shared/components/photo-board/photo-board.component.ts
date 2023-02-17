import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Photo } from './interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss'],
})
export class PhotoBoardComponent implements OnChanges {
  @Input() photos: Photo[];
  rows: Photo[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      const photos = changes.photos as SimpleChange;
      this.rows = this.groupColumns(photos.currentValue);
    }
  }

  groupColumns(photos: Photo[]): Photo[][] {
    const newRows = [];
    const step = 4;
    for (let i = 0; i < photos.length; i += step) {
      newRows.push(photos.slice(i, i + step));
    }
    return newRows;
  }
}

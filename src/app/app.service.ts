import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  private actualFontSize = new BehaviorSubject<any>(10);
  getFontSize() {
    return this.actualFontSize.asObservable();
  }

  constructor() {}
  onResizeFont(size: any) {
    this.actualFontSize.next(size);
  }
}

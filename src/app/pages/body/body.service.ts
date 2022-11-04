import { Injectable } from '@angular/core';
import { NavBar } from 'src/app/models/nav-bar.models';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BodyService {
  private actualFontSize= new BehaviorSubject<any>(10)

  getData(): Observable<NavBar[]> {
    return this.httpClient.get<NavBar[]>('assets/navbaritems.json');
  }
  getFontSize(){
    return this.actualFontSize.asObservable();
  }

  constructor(private httpClient: HttpClient) {}
  onResizeFont(size: any){
    this.actualFontSize.next(size)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { UserData } from 'src/app/models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpClient
      .get<any>(
        'https://crmbyoxy-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      )
      .pipe(
        map((data) => {
          const usersData = Object.keys(data).map((key) => {
            return data[key];
          });
          return usersData;
        })
      );
  }

  public getUserDetail(id: number): Observable<any> {
    // let headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET');

    // return this.httpClient.get<any>('https://crmbyoxy-default-rtdb.europe-west1.firebasedatabase.app/users/-NDlE3vmDbWl7LTzGxDd', {
    //     headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*'),
    //   });

    return this.httpClient
      .get<any>(
        'https://crmbyoxy-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      )
      .pipe(
        map((data) => {
          let usersData = Object.keys(data).map((key) => {
            return data[key];
          });
          usersData = usersData.filter((res) => {
            return res.userId === id;
          });
          let user = Object.assign({}, usersData[0]);
          return user;
        })
      );
  }

  addUser(user: UserData) {
    this.httpClient
      .post<any>(
        'https://crmbyoxy-default-rtdb.europe-west1.firebasedatabase.app/users.json',
        user
      )
      .subscribe((dataNewUser) =>
        this.getData().subscribe((getDataUser) => console.log(getDataUser))
      );
  }
}

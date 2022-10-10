import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TasksData } from 'src/app/models/tasks.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private httpClient: HttpClient) {}
  baseUrl =
    'https://crmbyoxy-default-rtdb.europe-west1.firebasedatabase.app/tasks';

  getData(): Observable<any> {
    return this.httpClient
      .get<any>(
        `${this.baseUrl}.json`
      )
      .pipe(
        map((data) => {
          const tasksData = Object.keys(data).map((key) => {
            return data[key];
          });
          return tasksData;
        })
      );
  }
  public addTask(task: TasksData): Observable<TasksData> {
    return this.httpClient.post<TasksData>(
      `${this.baseUrl}.json`,
      task
    );
  }

  public getTaskDetail(id: number): Observable<any> {
    return this.httpClient
      .get<any>(
        `${this.baseUrl}.json`
      )
      .pipe(
        map((data) => {
          let tasksData = Object.keys(data).map((key) => {
            return data[key];
          });
          tasksData = tasksData.filter((res) => {
            return res.id === id;
          });
          let task = Object.assign({}, tasksData[0]);
          console.log(task);
          return task;
        })
      );
  }

  public updateTask(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }
  public checkTask(id: number, value: boolean): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }
}

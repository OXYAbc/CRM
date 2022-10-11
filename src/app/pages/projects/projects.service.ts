import { Injectable } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  baseUrl =
    'https://crmbyoxy-default-rtdb.europe-west1.firebasedatabase.app/projects';
  constructor(private httpClient: HttpClient) {}

  public getData(): Observable<ProjectsData[]> {
    return this.httpClient.get<ProjectsData[]>(`${this.baseUrl}.json`);
  }

  public getProject(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}.json`);
  }

  public deleteProject(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text',
    });
  }

  public updateProject(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  public addproject(project: ProjectsData): Observable<ProjectsData> {
    return this.httpClient.post<ProjectsData>(`${this.baseUrl}`, project);
  }
}

import { Injectable } from "@angular/core";
import { ProjectsData } from "src/app/models/projects.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class ProjectsService{
    getData():Observable <ProjectsData[]>{
        return this.httpClient.get<ProjectsData[]>('assets/projects-data.json');
    }

    constructor (private httpClient: HttpClient){

    }
}
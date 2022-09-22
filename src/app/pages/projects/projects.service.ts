import { Injectable } from "@angular/core";
import * as projectsData from '../../../assets/projects-data.json'
import { ProjectsData } from "src/app/models/projects.model";

@Injectable({ providedIn: 'root'})
export class SidebarService{
    getData(): ProjectsData[]{
        return projectsData;
    }
}
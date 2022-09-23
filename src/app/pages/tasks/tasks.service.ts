import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TasksData } from "src/app/models/tasks.model";

@Injectable({providedIn: 'root'})
export class TasksService{
    getData():Observable <TasksData[]>{
        return this.httpClient.get<TasksData[]>('assets/tasks.json');
    }
    constructor(private httpClient:HttpClient) {
        
    }
}
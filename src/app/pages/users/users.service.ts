import { Injectable } from "@angular/core";
import { UserData } from "src/app/models/user.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class UsersService{
    getData():Observable <UserData[]>{
        return this.httpClient.get<UserData[]>('assets/users.json');
    }

    constructor (private httpClient: HttpClient){

    }
}
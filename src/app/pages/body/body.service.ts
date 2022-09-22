import { Injectable } from "@angular/core";
// import { navbarData } from "./nav-data";
import * as navbaritems from "src/assets/navbaritems.json"
import { NavBar } from "src/app/models/nav-bar.models";
import { HttpClient } from "@angular/common/http";
import { ObserversModule } from "@angular/cdk/observers";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class BodyService{
    getData():Observable <NavBar[]>{
        return this.httpClient.get<NavBar[]>('assets/navbaritems.json');
    }
     constructor (private httpClient: HttpClient) {

     }
}
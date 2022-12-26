import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameOptionService {

    private url = this.dataService.REST_API_SERVER;

    constructor(private dataService: DataService, private http: HttpClient) { }

    createGame(gameOptions: any): any{
        return this.http.post(this.url + '/createGame/', gameOptions);
    }

}
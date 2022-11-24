import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetButtonService {

    private url = this.dataService.REST_API_SERVER;

    constructor(private dataService: DataService, private http: HttpClient) { }

    resetScore(): any{
        return this.http.get(this.url + '/clear');
    }

}
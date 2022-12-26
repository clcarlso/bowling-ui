import { DataService } from './../data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RollButtonService {

    private url = this.dataService.REST_API_SERVER;

    constructor(private dataService: DataService, private http: HttpClient) { }

    rollPins(): any{
        return this.http.get(this.url + '/roll/');
    }
    rollMap(): any{
      return this.http.get(this.url + '/rollMap/');
    }
    placePins(numberOfPins:Number): any{
      return this.http.get(this.url + '/place/' + numberOfPins);
    }
    getScore(): any{
      return this.http.get(this.url + '/score/');
    }

}
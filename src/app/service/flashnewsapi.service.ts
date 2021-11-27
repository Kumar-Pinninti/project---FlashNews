import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashnewsapiService {

  constructor(private _http: HttpClient) { }

  //flashNewsUrl = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=1c5e2237fcd342bf86e1cc82c9d23654';

  flashNewsUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=df06f8e16d0645b5a28746daeb65aaf8';

  techApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=df06f8e16d0645b5a28746daeb65aaf8';

  businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=df06f8e16d0645b5a28746daeb65aaf8';

  sportsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=df06f8e16d0645b5a28746daeb65aaf8'




  // get request func

  topHeading(): Observable<any>
  {
    return this._http.get(this.flashNewsUrl);
  }

  techNews(): Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  businessNews(): Observable<any>{
    return this._http.get(this.businessApiUrl);
  }

  sportsNews(): Observable<any>{
    return this._http.get(this.sportsApiUrl);
  }




}

import { Component, OnInit } from '@angular/core';
import { FlashnewsapiService } from '../service/flashnewsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _service: FlashnewsapiService) { }


  sportsDisplay:any = [];

  ngOnInit(): void {
    this._service.sportsNews().subscribe((results) => {
      this.sportsDisplay = results.articles;
    })
  }

}

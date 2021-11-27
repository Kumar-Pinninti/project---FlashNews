import { Component, OnInit } from '@angular/core';
import { FlashnewsapiService } from '../service/flashnewsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _service: FlashnewsapiService) { }


  techNewsDisplay:any = [];

  ngOnInit(): void {
    this._service.techNews().subscribe((results) => {
      console.log(results);
      this.techNewsDisplay = results.articles;
    })
  }

}

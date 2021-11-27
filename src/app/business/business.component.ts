import { Component, OnInit } from '@angular/core';
import { FlashnewsapiService } from '../service/flashnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _service: FlashnewsapiService) { }

  businessDisplay:any = [];

  ngOnInit(): void {
    this._service.businessNews().subscribe((results) => {
      this.businessDisplay = results.articles;
    })
  }

}

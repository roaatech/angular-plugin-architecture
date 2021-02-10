import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'projects/shared-lib/src/lib/shared-lib.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  columns:any[]=[];
  data:any[]=[];
  constructor(
    private dataService:SharedLibService
    ) { }

  ngOnInit(): void {

    this.columns = [
      { field: 'serviceName', header: 'Service Name' },
      { field: 'userName', header: 'User Name'},
      { field: 'status', header: 'Status'}, 
    ];
    this.dataService.getRenderRequests().subscribe(res=>{
      this.data=res;
    })
  }

}
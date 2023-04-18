import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LifeCycleService } from 'src/app/services/life-cycle.service';
@Component({
  selector: 'app-scopeweb',
  templateUrl: './scopeweb.component.html',
  styleUrls: ['./scopeweb.component.scss']
})
export class ScopewebComponent implements OnInit,AfterViewInit {

  constructor(
    private _lifeCycleService:LifeCycleService
  ) { }
  ngAfterViewInit(): void {
    this._lifeCycleService.initCheck();
  }

  ngOnInit(): void {
    var self = this;
    self._lifeCycleService.completedLifeCycle.subscribe((cb)=>{

    });
  }

}

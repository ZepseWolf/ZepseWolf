import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LifeCycleService } from 'src/app/services/life-cycle.service';
@Component({
  selector: 'app-negativecnn',
  templateUrl: './negativecnn.component.html',
  styleUrls: ['./negativecnn.component.scss']
})
export class NegativecnnComponent implements OnInit,AfterViewInit {

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

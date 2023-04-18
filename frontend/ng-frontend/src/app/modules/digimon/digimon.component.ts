import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LifeCycleService } from 'src/app/services/life-cycle.service';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.scss']
})
export class DigimonComponent implements OnInit,AfterViewInit {

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

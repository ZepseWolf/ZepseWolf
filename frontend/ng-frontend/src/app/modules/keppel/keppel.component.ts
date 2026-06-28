import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LifeCycleService } from 'src/app/services/life-cycle.service';

@Component({
  selector: 'app-keppel',
  templateUrl: './keppel.component.html',
  styleUrls: ['./keppel.component.scss']
})
export class KeppelComponent implements OnInit, AfterViewInit {

  constructor(private _lifeCycleService: LifeCycleService) {}

  ngAfterViewInit(): void {
    this._lifeCycleService.initCheck();
  }

  ngOnInit(): void {
    this._lifeCycleService.completedLifeCycle.subscribe(() => {});
  }
}

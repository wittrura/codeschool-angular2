import { Component } from '@angular/core';
import { Race } from './race';
import { RaceService } from './race.service';
import { ScoreboardItemComponent } from './scoreboarditem.component'


@Component({
  selector: "scoreboard",
  template: `
    <header class="container">
    <h1>Scoreboard</h1>
    <h3>Race Notifications</h3>
    <ul>
      <li></li>
    </ul>
    </header>

    <div class="container-fluid scoreboard-display">
      <div class="row">
        <div class="col-xs-4" *ngFor="let race of races">
          <scoreboard-item [race]="race"></scoreboard-item>
        </div>
      </div>
    </div>
  `,
  directives: [ScoreboardItemComponent],
  providers: [RaceService]
})

export class ScoreboardComponent {
  races: Race[];

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.raceService.getRaces()
        .subscribe(data => this.races = data);
  }

}

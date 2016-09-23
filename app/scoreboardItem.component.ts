import { Component, Input } from '@angular/core';
import { Race } from './race';
import { RaceScore } from './raceScore'
import { RaceScoreService } from './raceScore.service';


@Component({
  selector: "scoreboard-item",
  template: `
  <div class="scoreboard-item" [class.finished]="score.currentLap >= score.totalLaps" *ngIf="score">
    <h2>{{race.name}}</h2>
    <p>Lap {{score.currentLap}} of {{score.totalLaps}}</p>
    <ol>
      <li></li>
    </ol>
  </div>
  `,
  providers: [RaceScoreService],
  styles: [`
    .scoreboard-item {
      border: 1px solid red;
    }
    .scoreboard-item.finished {
      border: 1px solid green;
    }
  `]
})

export class ScoreboardItemComponent {
  @Input() race: Race;

  score: RaceScore;

  constructor(private raceScoreService: RaceScoreService) { }

  ngOnInit() {
    this.raceScoreService.getScoreForRace(this.race.id)
        .subscribe(data => this.score = data);
  }

}

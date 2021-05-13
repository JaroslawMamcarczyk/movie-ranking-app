import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Player, GameClientService, Game, Part, PartNew} from 'src/app/remik/service/game-client.service'


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
playerArray: Player[];
gameArray: Game[] = [];
partArray: Part[] = [];
oneScorre: number =0;
twoScorre: number = 0;
threeScorre: number = 0;
fourScorre: number = 0;
public newPart:FormGroup;
  constructor(private gameClientService:GameClientService,
    private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.playerArray = this.activatedRoute.snapshot.data.player;
    this.gameClientService.getParts().subscribe(value =>
     {
       this.partArray = value;
     } )
     this.gameClientService.getGames().subscribe(value =>{
       this.gameArray = value;
     })
     this.partArray.forEach(value=>{
       this.oneScorre = this.oneScorre+value.playerOneResult;
       this.twoScorre = this.twoScorre + value.playerTwoResult;
       this.threeScorre = this.threeScorre + value.playerThreeResult;
       this.fourScorre =+ value.playerFourResult;
     });
     this.newPart = this.formBuilder.group({
       oneResult:[],
       twoResult:[],
       threeResult:[],
       fourResult:[],
       cruppers: this.formBuilder.array([]),
     })
     this.createCheckbox();
  }

  private  createCheckbox(){
    this.playerArray.forEach(()=>{
      this.cruppersFormArray.push(new FormControl(false));
    } );
  }
   get cruppersFormArray() {
    return this.newPart.controls.cruppers as FormArray;
  }

  public submit(){
    const selectedOrderIds = this.newPart.value.cruppers
  .map((checked: Player, i: number) => checked ? this.playerArray[i] : null)
      .filter((v: null) => v !== null);
    let part:PartNew={
  playerOneResult:this.newPart.value.oneResult,
  playerTwoResult:this.newPart.value.twoResult,
  playerThreeResult:this.newPart.value.threeResult,
  playerFourResult:this.newPart.value.fourResult,
  playerFiveResult:0,
  crupper:selectedOrderIds,
  gamePart:this.gameArray[0]
    }
    this.gameClientService.addPart(part);
    this.newPart.reset();
  }

}

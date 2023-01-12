export class BowlingGameDataModel {
  constructor(){
    this.uuid = "";
    this.rolls = [];
    this.rollMap = new Map<String, any>;
    this.scores = [];
    this.currentRoll = "";
  }
  uuid: string;
  rolls: string[];
  rollMap: Map<String, any>;
  scores: Number[];
  currentRoll: string;
  }

export class BowlingGameOptionsDataModel {
  constructor(uuid: string, pins: number, frames: number, rollsPerFrame:number, endFrames:number, rollsPerEndFrame:number, mode: string){
    this.uuid = uuid;
    this.pins = pins;
    this.frames = frames;
    this.rollsPerFrame = rollsPerFrame;
    this.endFrames = endFrames;
    this.rollsPerEndFrame = rollsPerEndFrame;
    this.mode = mode;
  }
    uuid: string;
    pins: number;
    frames: number;
    rollsPerFrame:number;
    endFrames: number;
    rollsPerEndFrame:number;
    mode: string;

    
  }
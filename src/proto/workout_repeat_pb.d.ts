import * as jspb from 'google-protobuf'



export class WorkoutRepeat extends jspb.Message {
  getId(): number;
  setId(value: number): WorkoutRepeat;

  getWorkoutId(): number;
  setWorkoutId(value: number): WorkoutRepeat;

  getExerciseId(): number;
  setExerciseId(value: number): WorkoutRepeat;

  getRepeats(): number;
  setRepeats(value: number): WorkoutRepeat;

  getWeight(): number;
  setWeight(value: number): WorkoutRepeat;
  hasWeight(): boolean;
  clearWeight(): WorkoutRepeat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkoutRepeat.AsObject;
  static toObject(includeInstance: boolean, msg: WorkoutRepeat): WorkoutRepeat.AsObject;
  static serializeBinaryToWriter(message: WorkoutRepeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkoutRepeat;
  static deserializeBinaryFromReader(message: WorkoutRepeat, reader: jspb.BinaryReader): WorkoutRepeat;
}

export namespace WorkoutRepeat {
  export type AsObject = {
    id: number,
    workoutId: number,
    exerciseId: number,
    repeats: number,
    weight?: number,
  }

  export enum WeightCase { 
    _WEIGHT_NOT_SET = 0,
    WEIGHT = 5,
  }
}


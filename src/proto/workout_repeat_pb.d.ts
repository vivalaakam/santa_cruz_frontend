// package: santa_cruz
// file: workout_repeat.proto

import * as jspb from "google-protobuf";

export class WorkoutRepeat extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getWorkoutId(): number;
  setWorkoutId(value: number): void;

  getExerciseId(): number;
  setExerciseId(value: number): void;

  getRepeats(): number;
  setRepeats(value: number): void;

  hasWeight(): boolean;
  clearWeight(): void;
  getWeight(): number;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkoutRepeat.AsObject;
  static toObject(includeInstance: boolean, msg: WorkoutRepeat): WorkoutRepeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    weight: number,
  }
}


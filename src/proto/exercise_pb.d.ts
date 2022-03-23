import * as jspb from 'google-protobuf'



export class GetExerciseRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetExerciseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExerciseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExerciseRequest): GetExerciseRequest.AsObject;
  static serializeBinaryToWriter(message: GetExerciseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExerciseRequest;
  static deserializeBinaryFromReader(message: GetExerciseRequest, reader: jspb.BinaryReader): GetExerciseRequest;
}

export namespace GetExerciseRequest {
  export type AsObject = {
    id: number,
  }
}

export class Exercise extends jspb.Message {
  getId(): number;
  setId(value: number): Exercise;

  getName(): string;
  setName(value: string): Exercise;

  getDescription(): string;
  setDescription(value: string): Exercise;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exercise.AsObject;
  static toObject(includeInstance: boolean, msg: Exercise): Exercise.AsObject;
  static serializeBinaryToWriter(message: Exercise, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exercise;
  static deserializeBinaryFromReader(message: Exercise, reader: jspb.BinaryReader): Exercise;
}

export namespace Exercise {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
  }
}


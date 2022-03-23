// package: santa_cruz
// file: workout.proto

import * as jspb from "google-protobuf";

export class GetWorkoutRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkoutRequest): GetWorkoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkoutRequest;
  static deserializeBinaryFromReader(message: GetWorkoutRequest, reader: jspb.BinaryReader): GetWorkoutRequest;
}

export namespace GetWorkoutRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetWorkoutsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkoutsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkoutsRequest): GetWorkoutsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkoutsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkoutsRequest;
  static deserializeBinaryFromReader(message: GetWorkoutsRequest, reader: jspb.BinaryReader): GetWorkoutsRequest;
}

export namespace GetWorkoutsRequest {
  export type AsObject = {
  }
}

export class GetWorkoutsResponse extends jspb.Message {
  clearWorkoutsList(): void;
  getWorkoutsList(): Array<Workout>;
  setWorkoutsList(value: Array<Workout>): void;
  addWorkouts(value?: Workout, index?: number): Workout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkoutsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkoutsResponse): GetWorkoutsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkoutsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkoutsResponse;
  static deserializeBinaryFromReader(message: GetWorkoutsResponse, reader: jspb.BinaryReader): GetWorkoutsResponse;
}

export namespace GetWorkoutsResponse {
  export type AsObject = {
    workoutsList: Array<Workout.AsObject>,
  }
}

export class CreateWorkoutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkoutRequest): CreateWorkoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWorkoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkoutRequest;
  static deserializeBinaryFromReader(message: CreateWorkoutRequest, reader: jspb.BinaryReader): CreateWorkoutRequest;
}

export namespace CreateWorkoutRequest {
  export type AsObject = {
  }
}

export class UpdateWorkoutRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): WorkoutStatusMap[keyof WorkoutStatusMap];
  setStatus(value: WorkoutStatusMap[keyof WorkoutStatusMap]): void;

  hasDay(): boolean;
  clearDay(): void;
  getDay(): string;
  setDay(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkoutRequest): UpdateWorkoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWorkoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkoutRequest;
  static deserializeBinaryFromReader(message: UpdateWorkoutRequest, reader: jspb.BinaryReader): UpdateWorkoutRequest;
}

export namespace UpdateWorkoutRequest {
  export type AsObject = {
    id: number,
    status: WorkoutStatusMap[keyof WorkoutStatusMap],
    day: string,
  }
}

export class DeleteWorkoutRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkoutRequest): DeleteWorkoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWorkoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkoutRequest;
  static deserializeBinaryFromReader(message: DeleteWorkoutRequest, reader: jspb.BinaryReader): DeleteWorkoutRequest;
}

export namespace DeleteWorkoutRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteWorkoutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkoutResponse): DeleteWorkoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteWorkoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkoutResponse;
  static deserializeBinaryFromReader(message: DeleteWorkoutResponse, reader: jspb.BinaryReader): DeleteWorkoutResponse;
}

export namespace DeleteWorkoutResponse {
  export type AsObject = {
  }
}

export class Workout extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStatus(): WorkoutStatusMap[keyof WorkoutStatusMap];
  setStatus(value: WorkoutStatusMap[keyof WorkoutStatusMap]): void;

  getDay(): string;
  setDay(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Workout.AsObject;
  static toObject(includeInstance: boolean, msg: Workout): Workout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Workout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Workout;
  static deserializeBinaryFromReader(message: Workout, reader: jspb.BinaryReader): Workout;
}

export namespace Workout {
  export type AsObject = {
    id: number,
    status: WorkoutStatusMap[keyof WorkoutStatusMap],
    day: string,
    createdAt: string,
    updatedAt: string,
  }
}

export interface WorkoutStatusMap {
  UNKNOWN: 0;
  IN_PROGRESS: 1;
  FINISHED: 2;
}

export const WorkoutStatus: WorkoutStatusMap;


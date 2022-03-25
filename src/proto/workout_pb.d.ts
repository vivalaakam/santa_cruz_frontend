import * as jspb from 'google-protobuf'



export class GetWorkoutRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetWorkoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkoutRequest): GetWorkoutRequest.AsObject;
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
  static serializeBinaryToWriter(message: GetWorkoutsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkoutsRequest;
  static deserializeBinaryFromReader(message: GetWorkoutsRequest, reader: jspb.BinaryReader): GetWorkoutsRequest;
}

export namespace GetWorkoutsRequest {
  export type AsObject = {
  }
}

export class GetWorkoutsResponse extends jspb.Message {
  getWorkoutsList(): Array<Workout>;
  setWorkoutsList(value: Array<Workout>): GetWorkoutsResponse;
  clearWorkoutsList(): GetWorkoutsResponse;
  addWorkouts(value?: Workout, index?: number): Workout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkoutsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkoutsResponse): GetWorkoutsResponse.AsObject;
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
  setId(value: number): UpdateWorkoutRequest;

  getStatus(): WorkoutStatus;
  setStatus(value: WorkoutStatus): UpdateWorkoutRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateWorkoutRequest;

  getDay(): string;
  setDay(value: string): UpdateWorkoutRequest;
  hasDay(): boolean;
  clearDay(): UpdateWorkoutRequest;

  getComment(): string;
  setComment(value: string): UpdateWorkoutRequest;
  hasComment(): boolean;
  clearComment(): UpdateWorkoutRequest;

  getRate(): number;
  setRate(value: number): UpdateWorkoutRequest;
  hasRate(): boolean;
  clearRate(): UpdateWorkoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkoutRequest): UpdateWorkoutRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkoutRequest;
  static deserializeBinaryFromReader(message: UpdateWorkoutRequest, reader: jspb.BinaryReader): UpdateWorkoutRequest;
}

export namespace UpdateWorkoutRequest {
  export type AsObject = {
    id: number,
    status?: WorkoutStatus,
    day?: string,
    comment?: string,
    rate?: number,
  }

  export enum StatusCase { 
    _STATUS_NOT_SET = 0,
    STATUS = 2,
  }

  export enum DayCase { 
    _DAY_NOT_SET = 0,
    DAY = 3,
  }

  export enum CommentCase { 
    _COMMENT_NOT_SET = 0,
    COMMENT = 6,
  }

  export enum RateCase { 
    _RATE_NOT_SET = 0,
    RATE = 7,
  }
}

export class DeleteWorkoutRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteWorkoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkoutRequest): DeleteWorkoutRequest.AsObject;
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
  setId(value: number): Workout;

  getStatus(): WorkoutStatus;
  setStatus(value: WorkoutStatus): Workout;

  getDay(): string;
  setDay(value: string): Workout;

  getCreatedAt(): string;
  setCreatedAt(value: string): Workout;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Workout;

  getComment(): string;
  setComment(value: string): Workout;

  getRate(): number;
  setRate(value: number): Workout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Workout.AsObject;
  static toObject(includeInstance: boolean, msg: Workout): Workout.AsObject;
  static serializeBinaryToWriter(message: Workout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Workout;
  static deserializeBinaryFromReader(message: Workout, reader: jspb.BinaryReader): Workout;
}

export namespace Workout {
  export type AsObject = {
    id: number,
    status: WorkoutStatus,
    day: string,
    createdAt: string,
    updatedAt: string,
    comment: string,
    rate: number,
  }
}

export enum WorkoutStatus { 
  UNKNOWN = 0,
  IN_PROGRESS = 1,
  FINISHED = 2,
}

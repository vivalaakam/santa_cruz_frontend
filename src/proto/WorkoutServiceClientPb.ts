/**
 * @fileoverview gRPC-Web generated client stub for santa_cruz
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as workout_pb from './workout_pb';


export class WorkoutServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetWorkout = new grpcWeb.MethodDescriptor(
    '/santa_cruz.WorkoutService/GetWorkout',
    grpcWeb.MethodType.UNARY,
    workout_pb.GetWorkoutRequest,
    workout_pb.Workout,
    (request: workout_pb.GetWorkoutRequest) => {
      return request.serializeBinary();
    },
    workout_pb.Workout.deserializeBinary
  );

  getWorkout(
    request: workout_pb.GetWorkoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.Workout>;

  getWorkout(
    request: workout_pb.GetWorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void): grpcWeb.ClientReadableStream<workout_pb.Workout>;

  getWorkout(
    request: workout_pb.GetWorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santa_cruz.WorkoutService/GetWorkout',
        request,
        metadata || {},
        this.methodDescriptorGetWorkout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santa_cruz.WorkoutService/GetWorkout',
    request,
    metadata || {},
    this.methodDescriptorGetWorkout);
  }

  methodDescriptorCreateWorkout = new grpcWeb.MethodDescriptor(
    '/santa_cruz.WorkoutService/CreateWorkout',
    grpcWeb.MethodType.UNARY,
    workout_pb.CreateWorkoutRequest,
    workout_pb.Workout,
    (request: workout_pb.CreateWorkoutRequest) => {
      return request.serializeBinary();
    },
    workout_pb.Workout.deserializeBinary
  );

  createWorkout(
    request: workout_pb.CreateWorkoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.Workout>;

  createWorkout(
    request: workout_pb.CreateWorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void): grpcWeb.ClientReadableStream<workout_pb.Workout>;

  createWorkout(
    request: workout_pb.CreateWorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santa_cruz.WorkoutService/CreateWorkout',
        request,
        metadata || {},
        this.methodDescriptorCreateWorkout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santa_cruz.WorkoutService/CreateWorkout',
    request,
    metadata || {},
    this.methodDescriptorCreateWorkout);
  }

  methodDescriptorUpdateWorkout = new grpcWeb.MethodDescriptor(
    '/santa_cruz.WorkoutService/UpdateWorkout',
    grpcWeb.MethodType.UNARY,
    workout_pb.UpdateWorkoutRequest,
    workout_pb.Workout,
    (request: workout_pb.UpdateWorkoutRequest) => {
      return request.serializeBinary();
    },
    workout_pb.Workout.deserializeBinary
  );

  updateWorkout(
    request: workout_pb.UpdateWorkoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.Workout>;

  updateWorkout(
    request: workout_pb.UpdateWorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void): grpcWeb.ClientReadableStream<workout_pb.Workout>;

  updateWorkout(
    request: workout_pb.UpdateWorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santa_cruz.WorkoutService/UpdateWorkout',
        request,
        metadata || {},
        this.methodDescriptorUpdateWorkout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santa_cruz.WorkoutService/UpdateWorkout',
    request,
    metadata || {},
    this.methodDescriptorUpdateWorkout);
  }

  methodDescriptorDeleteWorkout = new grpcWeb.MethodDescriptor(
    '/santa_cruz.WorkoutService/DeleteWorkout',
    grpcWeb.MethodType.UNARY,
    workout_pb.DeleteWorkoutRequest,
    workout_pb.DeleteWorkoutResponse,
    (request: workout_pb.DeleteWorkoutRequest) => {
      return request.serializeBinary();
    },
    workout_pb.DeleteWorkoutResponse.deserializeBinary
  );

  deleteWorkout(
    request: workout_pb.DeleteWorkoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.DeleteWorkoutResponse>;

  deleteWorkout(
    request: workout_pb.DeleteWorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.DeleteWorkoutResponse) => void): grpcWeb.ClientReadableStream<workout_pb.DeleteWorkoutResponse>;

  deleteWorkout(
    request: workout_pb.DeleteWorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.DeleteWorkoutResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santa_cruz.WorkoutService/DeleteWorkout',
        request,
        metadata || {},
        this.methodDescriptorDeleteWorkout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santa_cruz.WorkoutService/DeleteWorkout',
    request,
    metadata || {},
    this.methodDescriptorDeleteWorkout);
  }

  methodDescriptorGetWorkouts = new grpcWeb.MethodDescriptor(
    '/santa_cruz.WorkoutService/GetWorkouts',
    grpcWeb.MethodType.UNARY,
    workout_pb.GetWorkoutsRequest,
    workout_pb.GetWorkoutsResponse,
    (request: workout_pb.GetWorkoutsRequest) => {
      return request.serializeBinary();
    },
    workout_pb.GetWorkoutsResponse.deserializeBinary
  );

  getWorkouts(
    request: workout_pb.GetWorkoutsRequest,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.GetWorkoutsResponse>;

  getWorkouts(
    request: workout_pb.GetWorkoutsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.GetWorkoutsResponse) => void): grpcWeb.ClientReadableStream<workout_pb.GetWorkoutsResponse>;

  getWorkouts(
    request: workout_pb.GetWorkoutsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.GetWorkoutsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santa_cruz.WorkoutService/GetWorkouts',
        request,
        metadata || {},
        this.methodDescriptorGetWorkouts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santa_cruz.WorkoutService/GetWorkouts',
    request,
    metadata || {},
    this.methodDescriptorGetWorkouts);
  }

}


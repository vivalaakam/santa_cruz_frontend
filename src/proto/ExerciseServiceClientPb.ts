/**
 * @fileoverview gRPC-Web generated client stub for santa_cruz
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as exercise_pb from './exercise_pb';


export class ExerciseServiceClient {
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

  methodDescriptorGetExercise = new grpcWeb.MethodDescriptor(
    '/santa_cruz.ExerciseService/GetExercise',
    grpcWeb.MethodType.UNARY,
    exercise_pb.GetExerciseRequest,
    exercise_pb.Exercise,
    (request: exercise_pb.GetExerciseRequest) => {
      return request.serializeBinary();
    },
    exercise_pb.Exercise.deserializeBinary
  );

  getExercise(
    request: exercise_pb.GetExerciseRequest,
    metadata: grpcWeb.Metadata | null): Promise<exercise_pb.Exercise>;

  getExercise(
    request: exercise_pb.GetExerciseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void): grpcWeb.ClientReadableStream<exercise_pb.Exercise>;

  getExercise(
    request: exercise_pb.GetExerciseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/santa_cruz.ExerciseService/GetExercise',
        request,
        metadata || {},
        this.methodDescriptorGetExercise,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/santa_cruz.ExerciseService/GetExercise',
    request,
    metadata || {},
    this.methodDescriptorGetExercise);
  }

}


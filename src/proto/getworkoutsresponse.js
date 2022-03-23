// source: workout.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.santa_cruz.GetWorkoutsResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.santa_cruz.Workout');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.santa_cruz.GetWorkoutsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.santa_cruz.GetWorkoutsResponse.repeatedFields_, null);
};
goog.inherits(proto.santa_cruz.GetWorkoutsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.santa_cruz.GetWorkoutsResponse.displayName = 'proto.santa_cruz.GetWorkoutsResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.santa_cruz.GetWorkoutsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.santa_cruz.GetWorkoutsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.santa_cruz.GetWorkoutsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.santa_cruz.GetWorkoutsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santa_cruz.GetWorkoutsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    workoutsList: jspb.Message.toObjectList(msg.getWorkoutsList(),
    proto.santa_cruz.Workout.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.santa_cruz.GetWorkoutsResponse}
 */
proto.santa_cruz.GetWorkoutsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.santa_cruz.GetWorkoutsResponse;
  return proto.santa_cruz.GetWorkoutsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.santa_cruz.GetWorkoutsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.santa_cruz.GetWorkoutsResponse}
 */
proto.santa_cruz.GetWorkoutsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.santa_cruz.Workout;
      reader.readMessage(value,proto.santa_cruz.Workout.deserializeBinaryFromReader);
      msg.addWorkouts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.santa_cruz.GetWorkoutsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.santa_cruz.GetWorkoutsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.santa_cruz.GetWorkoutsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.santa_cruz.GetWorkoutsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkoutsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.santa_cruz.Workout.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Workout workouts = 1;
 * @return {!Array<!proto.santa_cruz.Workout>}
 */
proto.santa_cruz.GetWorkoutsResponse.prototype.getWorkoutsList = function() {
  return /** @type{!Array<!proto.santa_cruz.Workout>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.santa_cruz.Workout, 1));
};


/**
 * @param {!Array<!proto.santa_cruz.Workout>} value
 * @return {!proto.santa_cruz.GetWorkoutsResponse} returns this
*/
proto.santa_cruz.GetWorkoutsResponse.prototype.setWorkoutsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.santa_cruz.Workout=} opt_value
 * @param {number=} opt_index
 * @return {!proto.santa_cruz.Workout}
 */
proto.santa_cruz.GetWorkoutsResponse.prototype.addWorkouts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.santa_cruz.Workout, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.santa_cruz.GetWorkoutsResponse} returns this
 */
proto.santa_cruz.GetWorkoutsResponse.prototype.clearWorkoutsList = function() {
  return this.setWorkoutsList([]);
};



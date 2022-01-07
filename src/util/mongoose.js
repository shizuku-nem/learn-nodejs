export function multipleMongooseToObject(mongooseArray) {
    return mongooseArray.map((mongoose) => mongoose.toObject());
}
export function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

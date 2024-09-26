import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    email: string;
    password: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;

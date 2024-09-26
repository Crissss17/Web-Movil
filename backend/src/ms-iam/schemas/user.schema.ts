import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

@Schema({
    timestamps: true
})
export class User {
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    title: string;

    @Prop({
        trim: true
    })
    description: string;

    @Prop({
        default: false,
    })
    done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(User)
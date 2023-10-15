import { Schema ,Prop, SchemaFactory} from "@nestjs/mongoose";
import moment from "moment";
import { HydratedDocument } from "mongoose";

export type commentDocument = HydratedDocument<Comments>
@Schema()
export class Comments {
    @Prop()
    msg: string;

    @Prop()
    commentFor: string;

    @Prop()
    userId: string;

    @Prop({required:true})
    createdAt: number;

    @Prop()
    updatedAt: Date;

    @Prop({default:false})
    isDeleted: boolean;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments)
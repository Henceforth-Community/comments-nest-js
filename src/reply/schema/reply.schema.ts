import { Schema ,Prop , SchemaFactory} from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Comments } from "../../comments/schema/comment.schema";

export type ReplyDocument = HydratedDocument<Replies>
@Schema()
export class Replies {
    @Prop()
    msg: string;

    @Prop({ type: mongoose.Schema.Types.String, ref: 'Comments' })
    commentId: Comments;

    @Prop()
    userId: string;

    @Prop()
    timestamp: true;

    @Prop({default: false})
    isDeleted: boolean;
}

export const RepliesSchema = SchemaFactory.createForClass(Replies)
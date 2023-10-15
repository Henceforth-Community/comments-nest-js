import { Schema ,Prop , SchemaFactory} from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Comments } from "../../comments/schema/comment.schema";

export type ReplyDocument = HydratedDocument<Replies>
@Schema()
export class Replies {
    @Prop()
    msg: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' })
    comment_id: Comments;

    @Prop()
    user_id: string;

    @Prop()
    timestamp: true;

    @Prop()
    isDeleted: string;
}

export const RepliesSchema = SchemaFactory.createForClass(Replies)
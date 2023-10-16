import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Replies, RepliesSchema } from './schema/reply.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name:Replies.name, schema:RepliesSchema}])
  ],
  controllers: [ReplyController],
  providers: [ReplyService],
})
export class ReplyModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { ReplyModule } from './reply/reply.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    CommentsModule, ReplyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

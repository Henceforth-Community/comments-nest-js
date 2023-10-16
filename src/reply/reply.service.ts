import { Injectable } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Replies } from './schema/reply.schema';
import { Model } from 'mongoose';

@Injectable()
export class ReplyService {
  constructor(
    @InjectModel(Replies.name) private replyModel: Model<Replies>
  ){}
  create(createReplyDto: CreateReplyDto) {
    return new this.replyModel(createReplyDto).save();
  }

  findAll() {
    let projection = {isDeleted:false}
    return this.replyModel.find(projection).populate('commentId').exec();
  }

  findOne(id: string) {
    let query = {_id:id}
    return this.replyModel.findOne(query).exec();
  }

  update(id: string, updateReplyDto: UpdateReplyDto) {
    return this.replyModel.findByIdAndUpdate({_id:id},updateReplyDto,{new:true});
  }

  async remove(id: string) {
    let selectedReply = await this.findOne(id)
    if(selectedReply?.isDeleted == false){
    return this.replyModel.findByIdAndUpdate({_id:id},{isDeleted:true},{new:true});
    }
  }
}

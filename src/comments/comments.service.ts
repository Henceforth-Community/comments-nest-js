import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comments } from './schema/comment.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as moment from "moment";

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private commmentModel: Model<Comments>
  ){}
  create(createCommentDto: CreateCommentDto) {
    createCommentDto['createdAt']=moment().utc().valueOf()
    return new this.commmentModel(createCommentDto).save();
  }

  findAll() {
    let projection = {isDeleted:false}
    return this.commmentModel.find(projection).exec();
  }

  findOne(id: string) {
    let projection = {isDeleted:false}
    let query = {_id:id}
    return this.commmentModel.findOne(query,projection).exec();
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    let query = {_id:id}
    return this.commmentModel.findByIdAndUpdate(query,updateCommentDto,{new:true});
  }

  async remove(id: string) {
    let query = {_id:id}
    let selectedcomment = await this.findOne(id)
    if(selectedcomment?.isDeleted == false){
      return this.commmentModel.findByIdAndUpdate(query,{isDeleted:true}, {new:true})
    }
  }
}

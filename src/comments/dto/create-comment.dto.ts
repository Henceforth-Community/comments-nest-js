import {ApiProperty} from '@nestjs/swagger'
export class CreateCommentDto {
    @ApiProperty()
    msg:string;

    @ApiProperty()
    user_id: string;

    @ApiProperty()
    comment_for: string;
}

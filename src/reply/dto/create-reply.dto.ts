import { ApiProperty } from "@nestjs/swagger";

export class CreateReplyDto {
    @ApiProperty()
    msg: string;

    @ApiProperty()
    commentId: string;

    @ApiProperty()
    userId: string;
}

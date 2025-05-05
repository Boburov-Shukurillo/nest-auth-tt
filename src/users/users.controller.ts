import { Body, Controller, Post } from '@nestjs/common';
import { CreatedUserDto } from './dto/created.user.dto';

@Controller('auth')
export class UsersController {
    @Post('/signup')
    create(
        @Body() createdUser: CreatedUserDto
    ) {
        console.log('createdUser', createdUser);

        return createdUser
    }
}

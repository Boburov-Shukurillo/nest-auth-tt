import { Injectable } from '@nestjs/common';
import { CreatedUserDto } from './dto/created.user.dto';
import * as bycrypt from 'bcrypt';
import { SignupResponse } from './user';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }
    async signup(playload: CreatedUserDto): Promise<SignupResponse> {

        const hash = await this.encryptPassword(playload.password, 10);

        playload.password = hash;
        // const salt = await bycrypt.genSalt(10);

        return await this.prisma.user.create({
            data: playload,

            select: {
                email: true,
                id: true,
            }
        })
    }

    async encryptPassword(plainText, saltRound) {
        // const saltRound = 10;
        // const salt = await bycrypt.genSalt(saltRound);

        return await bycrypt.hash(plainText, saltRound);
    }
}

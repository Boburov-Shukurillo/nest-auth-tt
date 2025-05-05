import { CreatedUserDto } from './dto/created.user.dto';
import { SignupResponse } from './user';
import { PrismaService } from 'src/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    signup(playload: CreatedUserDto): Promise<SignupResponse>;
    encryptPassword(plainText: any, saltRound: any): Promise<string>;
}

import { INestApplication, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    enebleShutdownHooks(app: INestApplication): Promise<void>;
}

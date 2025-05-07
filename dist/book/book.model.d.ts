import { Prisma } from "generated/prisma";
export declare class Book implements Prisma.BookCreateInput {
    id?: string;
    title: string;
    description: string;
}

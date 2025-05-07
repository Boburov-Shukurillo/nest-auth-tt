import { Prisma } from "generated/prisma";


export class Book implements Prisma.BookCreateInput {
    id?: string;
    title: string;
    description: string;
}
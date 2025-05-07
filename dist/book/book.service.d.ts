import { PrismaService } from "src/prisma.service";
import { Book } from "./book.model";
export declare class BookService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllBooks(): Promise<Book | []>;
    getBookById(id: Number): Promise<Book | null>;
    createBook(book: Book): Promise<Book>;
    updateBook(id: Number, book: Book): Promise<Book>;
    deleteBook(id: Number): Promise<Book>;
}

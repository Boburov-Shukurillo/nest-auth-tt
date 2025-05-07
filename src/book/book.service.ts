    import { PrismaService } from "src/prisma.service";
    import { Book } from "./book.model";

    export class BookService {
        constructor(private readonly prisma: PrismaService) { }

        async getAllBooks(): Promise<Book | []> {
            return this.prisma.book.findMany();
        }

        async getBookById(id: Number): Promise<Book | null> {
            return this.prisma.book.findUnique({
                where: { id: id },
            });
        }

        async createBook(book: Book): Promise<Book> {
            return this.prisma.book.create({
                data: book,
            });
        }

        async updateBook(id: Number, book: Book): Promise<Book> {
            return this.prisma.book.update({
                where: { id: id },
                data: book,
            });
        }

        async deleteBook(id: Number): Promise<Book> {
            return this.prisma.book.delete({
                where: { id: id },
            });
        }


    }
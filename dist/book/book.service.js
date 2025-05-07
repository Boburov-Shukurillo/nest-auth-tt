"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
class BookService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllBooks() {
        return this.prisma.book.findMany();
    }
    async getBookById(id) {
        return this.prisma.book.findUnique({
            where: { id: id },
        });
    }
    async createBook(book) {
        return this.prisma.book.create({
            data: book,
        });
    }
    async updateBook(id, book) {
        return this.prisma.book.update({
            where: { id: id },
            data: book,
        });
    }
    async deleteBook(id) {
        return this.prisma.book.delete({
            where: { id: id },
        });
    }
}
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map
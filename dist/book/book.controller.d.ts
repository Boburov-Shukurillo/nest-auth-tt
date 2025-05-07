import { Book } from "./book.model";
import { BookService } from "./book.service";
import { Request, Response } from "express";
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBook(request: Request, response: Response): Promise<any>;
    postBook(postData: Book): Promise<Book>;
    getBook(id: number): Promise<Book | null>;
    deleteBook(id: number): Promise<Book>;
    updateBook(id: number, data: Book): Promise<Book>;
}

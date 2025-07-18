import { Controller, Get } from '@nestjs/common';
import { BooksService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller()
export class BookController {
  constructor(private readonly bookService: BooksService) {}

  @Get('/list')
  getAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}

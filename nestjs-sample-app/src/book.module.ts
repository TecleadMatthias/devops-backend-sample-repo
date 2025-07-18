import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { BookController } from './book.controller';
import { BooksService } from './book.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Book.name, schema: BookSchema }],
      'books',
    ),
  ],
  controllers: [BookController],
  providers: [BooksService],
})
export class CatsModule {}

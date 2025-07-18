import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book.controller';
import { BooksService } from './book.service';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  controllers: [AppController, BookController],
  providers: [AppService, BooksService],
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URI ?? '', {
      dbName: process.env.DATABASE_NAME,
      auth: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
      },
    }),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}

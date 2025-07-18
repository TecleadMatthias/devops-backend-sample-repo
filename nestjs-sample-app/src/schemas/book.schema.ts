import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  name: string;

  @Prop()
  author: string;

  @Prop()
  year: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

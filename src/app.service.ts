import { Injectable } from '@nestjs/common';
import BookInterface from './interfaces/book.interface';

@Injectable()
export class AppService {
  private readonly books: Array<BookInterface> = [
    {
      id: '1',
      title: 'Корабль',
      description: '',
      authors: 'Автор',
      favorite: '',
      fileCover: 'Твердая',
      fileName: ''
    }
    ];

  getAllBooks(): Array<BookInterface> {
    return this.books;
  }

  createBook(book: BookInterface): BookInterface {
    this.books.push(book);
    return book;
  }

  deleteBook(id: string) {
    const index: number = this.books.findIndex(el => el.id === id);
    if(index > -1) {
      this.books.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

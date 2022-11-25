import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { AppService } from './app.service';
import BookInterface from './interfaces/book.interface';
import DeleteBookInterface from './interfaces/delete.book';



@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBooks(): Array<BookInterface> {
    return this.appService.getAllBooks();
  }

  @Post()
  createBook(@Body() data: BookInterface) {
    return this.appService.createBook(data);
  }
  @Delete()
  deleteBook(@Body() data: DeleteBookInterface): Boolean {
    return this.appService.deleteBook(data.id);
  }
}

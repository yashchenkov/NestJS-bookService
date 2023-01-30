import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { AppService } from '../src/app.service'
import { INestApplication } from '@nestjs/common';


describe('AppController (e2e)', () => {
  let app: INestApplication;
  let bookService = { getAllBooks: () => ['test'], create: f => f, delete: id => id };

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
    .overrideProvider(AppService)
    .useValue(bookService)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET books', () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect(
        bookService.getAllBooks(),
      );
  });

  it('/POST book', (f) => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect(
        bookService.create(f),
      );
  });

  it('/DELETE book', (id) => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect(
        bookService.delete(id),
      );
  });
  afterAll(async () => {
    await app.close();
  });

});

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;;
  let appController: AppController;
  let appService: AppService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
     

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getBooks', () => {
    it('should return an array of books', async () => {
      const result = [{
        id: '2',
        title: 'string',
        description: 'string',
        authors: 'string',
        favorite: 'string',
        fileCover: 'string',
        fileName: 'string'
      }];
      jest.spyOn(appService, 'getAllBooks').mockImplementation(() => result);

      expect(await appController.getBooks()).toBe(result);
    });
  });

  describe('createBook', () => {
    it('should return freshly created book', async () => {
      
      expect(await appController.createBook({
        id: '2',
        title: 'string',
        description: 'string',
        authors: 'string',
        favorite: 'string',
        fileCover: 'string',
        fileName: 'string'

      })).toEqual({
        id: '2',
        title: 'string',
        description: 'string',
        authors: 'string',
        favorite: 'string',
        fileCover: 'string',
        fileName: 'string'

      });
    });
  });

  describe('deleteBook', () => {
    it('should return true or false', async () => {
      
      expect(await appController.deleteBook({id:'1'})).toBe(true);
    });
  });

});

// app.module.ts
import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

/*
앱 모듈은 모든 것의 루트 모듈
모듈은 어플리케이션의 일부
앱 모듈에서는 우리가 하는 모든 것을 import
*/
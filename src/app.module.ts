import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig';
import { UserModule } from '@app/user/user.module';
import { AuthMiddleware } from './user/middlewares/auth.middleware';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    TagModule,
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //global middleware to grab the request header and
  //check the token
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}

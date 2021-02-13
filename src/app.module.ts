import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PostModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

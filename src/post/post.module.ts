import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostService } from './post.service';

@Module({
    imports: [PrismaModule],
    providers: [PostService],
    exports: [PostService]
  })
export class PostModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { TranscationModule } from './transcation/transcation.module';
import { AuthModule } from './auth/auth.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      path: '/api',
      driver: ApolloDriver,
      playground: true, 
      context: ({ req }) => ({ req }),
    }),
    UserModule,
    TranscationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

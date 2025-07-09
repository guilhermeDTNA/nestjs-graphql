import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ExampleModule } from './example/example.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true, // Gera o schema automaticamente
      playground: true, // Habilita o Playground
    }),
    ExampleModule,
    UserModule,
  ],
})
export class AppModule {}

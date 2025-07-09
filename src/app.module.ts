import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true, // Gera o schema automaticamente
      playground: true, // Habilita o Playground
    }),
    ExampleModule,
  ],
})
export class AppModule {}

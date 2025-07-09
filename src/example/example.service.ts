import { Injectable } from '@nestjs/common';
import { ExampleInputDTO } from './dto/example-input.dto';
import { ExampleOutputDTO } from './dto/example-output.dto';

@Injectable()
export class ExampleService {
  processExample(input: ExampleInputDTO): ExampleOutputDTO {
    const message = `
      Nome: ${input.name}\n
      Idade: ${input.age}
    `;

    return { message };
  }
}

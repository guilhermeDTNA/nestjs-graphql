import { Test, TestingModule } from '@nestjs/testing';
import { ExampleInputDTO } from '../example/dto/example-input.dto';
import { ExampleOutputDTO } from '../example/dto/example-output.dto';
import { ExampleResolver } from '../example/example.resolver';
import { ExampleService } from '../example/example.service';

describe('ExampleResolver', () => {
  let resolver: ExampleResolver;
  let service: ExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExampleResolver,
        { provide: ExampleService, useValue: { processExample: jest.fn() } },
      ],
    }).compile();

    resolver = module.get<ExampleResolver>(ExampleResolver);
    service = module.get<ExampleService>(ExampleService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return ExampleOutputDTO when exampleQuery is called', async () => {
    const input: ExampleInputDTO = { name: 'Guilherme', age: 27 };
    const expectedOutput: ExampleOutputDTO = {
      message: 'Nome: Guilherme\nIdade: 27',
    };

    jest.spyOn(service, 'processExample').mockReturnValue(expectedOutput);

    const result = await resolver.exampleQuery(input);
    expect(result).toEqual(expectedOutput);
    expect(service.processExample).toHaveBeenCalledWith(input);
  });
});

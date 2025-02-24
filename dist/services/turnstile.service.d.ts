import { HttpService } from '@nestjs/axios';
import { ITurnstileOptions } from '../interfaces/turnstile';
export declare class TurnstileService {
  private readonly httpService;
  private readonly options;
  private BASE_URL;
  constructor(httpService: HttpService, options: ITurnstileOptions);
  validateToken(token: string): Promise<any>;
}

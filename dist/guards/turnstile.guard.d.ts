import { ExecutionContext, CanActivate } from '@nestjs/common';
import { TurnstileService } from '../services/turnstile.service';
import { ITurnstileOptions } from '../interfaces/turnstile';
export declare class TurnstileGuard implements CanActivate {
  private readonly turnstileService;
  private readonly options;
  constructor(turnstileService: TurnstileService, options: ITurnstileOptions);
  canActivate(context: ExecutionContext): Promise<boolean>;
}

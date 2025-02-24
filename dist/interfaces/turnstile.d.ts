import {
  Type,
  DynamicModule,
  ForwardReference,
  InjectionToken,
  OptionalFactoryDependency,
} from '@nestjs/common';
export interface ITurnstileOptions {
  secretKey: string;
  tokenResponse: (req: any) => string;
  onError?: (error: any) => void;
}
export interface IAsyncTurnstileOptions {
  imports?: Array<
    Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
  >;
  inject?: Array<InjectionToken | OptionalFactoryDependency>;
  useFactory: (
    ...args: any[]
  ) => ITurnstileOptions | Promise<ITurnstileOptions>;
}

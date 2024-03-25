import { DynamicModule, Global, Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import {
  ClientProviderOptions,
  ClientsModule,
  Transport,
} from "@nestjs/microservices";
import { CONFIG_SERVICE_PORT, CONFIG_SERVICE_NAME } from "./config.setup";

const createConfigServiceOptions = (port: number): ClientProviderOptions => ({
  name: CONFIG_SERVICE_NAME,
  transport: Transport.TCP,
  options: {
    port,
  },
});

const createConfigServiceClient = (port: number) =>
  ClientsModule.registerAsync([
    {
      name: CONFIG_SERVICE_NAME,
      useFactory: () => createConfigServiceOptions(port),
    },
  ]);

@Global()
@Module({})
export class ConfigModule {
  private static createDynamicModule(configServicePort: number): DynamicModule {
    return {
      module: ConfigModule,
      exports: [ConfigService],
      providers: [ConfigService],
      imports: [createConfigServiceClient(configServicePort)],
    };
  }

  private static createFeatureModule(): DynamicModule {
    return {
      module: ConfigModule,
      exports: [ConfigService],
      providers: [ConfigService],
    };
  }

  static forRoot(
    configServicePort: number = CONFIG_SERVICE_PORT
  ): DynamicModule {
    return this.createDynamicModule(configServicePort);
  }

  static forRootAsync(
    configServicePort: number = CONFIG_SERVICE_PORT
  ): DynamicModule {
    return this.createDynamicModule(configServicePort);
  }

  static register(
    configServicePort: number = CONFIG_SERVICE_PORT
  ): DynamicModule {
    return this.createDynamicModule(configServicePort);
  }

  static registerAsync(
    configServicePort: number = CONFIG_SERVICE_PORT
  ): DynamicModule {
    return this.createDynamicModule(configServicePort);
  }

  static forFeature(): DynamicModule {
    return this.createFeatureModule();
  }

  static forFeatureAsync(): DynamicModule {
    return this.createFeatureModule();
  }
}

import { DynamicModule, Global, Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { CONFIG_SERVICE_PORT, CONFIG_SERVICE_NAME } from "./config.setup";

@Global()
@Module({})
export class ConfigModule {
  private static createDynamicModule(configServicePort: number): DynamicModule {
    return {
      module: ConfigModule,
      providers: [ConfigService],
      exports: [ConfigService],
      imports: [
        ClientsModule.registerAsync([
          {
            name: CONFIG_SERVICE_NAME,
            useFactory: () => ({
              transport: Transport.TCP,
              options: { port: configServicePort },
            }),
          },
        ]),
      ],
    };
  }

  static forRoot(configServicePort: number = CONFIG_SERVICE_PORT): DynamicModule {
    return this.createDynamicModule(configServicePort);
  }

  static forFeature(): DynamicModule {
    return {
      module: ConfigModule,
      providers: [ConfigService],
      exports: [ConfigService],
    };
  }
}
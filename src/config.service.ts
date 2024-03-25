import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ConfigService {
  constructor(@Inject("R_CONFIG_SERVICE") private client: ClientProxy) {}

  async get<T>(key: string): Promise<T> {
    if (key in process.env) {
      return process.env[key] as unknown as T;
    }
    const resultObservable = this.client.send({ cmd: "get" }, key);
    return lastValueFrom(resultObservable) as Promise<T>;
  }

  async set(key: string, value: unknown): Promise<void> {
    const resultObservable = this.client.send({ cmd: "set" }, { key, value });
    await lastValueFrom(resultObservable);
  }
}

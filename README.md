# Nestjs Redis Config

<p align="center">
  A Nest.js package to store and get configuration, which uses <a href="https://github.com/redis/redis">Redis</a> to store data, so ur able to share that data across your Microservices.
</p>

<p align="center">
<a href="https://github.com/uhmpasterig/nest-redis-config/issues"><img src="https://img.shields.io/github/issues/uhmpasterig/nest-redis-config" alt="GitHub issues"></a>
<a href="https://github.com/uhmpasterig/nest-redis-config/network"><img src="https://img.shields.io/github/forks/uhmpasterig/nest-redis-config" alt="GitHub forks"></a>
<a href="https://github.com/uhmpasterig/nest-redis-config/stargazers"><img src="https://img.shields.io/github/stars/uhmpasterig/nest-redis-config" alt="GitHub stars"></a>
<a href="https://github.com/uhmpasterig/nest-redis-config/blob/master/LICENSE.md"><img src="https://img.shields.io/github/license/uhmpasterig/nest-redis-config" alt="GitHub license"></a>
<a href="https://www.npmjs.com/package/nest-redis-config"><img src="https://img.shields.io/npm/v/nest-redis-config" alt="NPM version"></a>
</p>

## Example
The example Microservice can be found [here] (https://github.com/uhmpasterig/config-microservice-example).

## Benefits

- **Shared Configuration**: By using Redis as a central store for configuration, you can easily share configuration data across multiple microservices.

- **Real-time Updates**: Changes to configuration in Redis are immediately available to all microservices, allowing for real-time updates without needing to restart your services.

- **Scalability**: Redis is highly scalable and can handle large amounts of data, making it suitable for large applications with many microservices.

- **Performance**: Redis is an in-memory database, so reading and writing configuration data is fast.

- **Persistence**: Redis provides data persistence, so your configuration data won't be lost even if Redis goes down or is restarted.

- **Ease of Use**: This package integrates seamlessly with NestJS, making it easy to use Redis for configuration in your NestJS applications. It's just feels like using the @nestjs/config package.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run dev

# build
npm run build
```

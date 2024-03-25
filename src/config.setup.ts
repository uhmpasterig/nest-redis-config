import * as dotenv from "dotenv";

dotenv.config();

const DEFAULT_CONFIG_SERVICE_PORT = 3000;
const DEFAULT_CONFIG_SERVICE_NAME = "CONFIG_SERVICE";

const CONFIG_SERVICE_PORT =
  parseInt(process.env.CONFIG_SERVICE_PORT, 10) || DEFAULT_CONFIG_SERVICE_PORT;

const CONFIG_SERVICE_NAME =
  process.env.CONFIG_SERVICE_NAME || DEFAULT_CONFIG_SERVICE_NAME;

if (isNaN(CONFIG_SERVICE_PORT)) {
  console.warn(
    "CONFIG_SERVICE_PORT is not defined in the environment, using default port " +
      DEFAULT_CONFIG_SERVICE_PORT
  );
}

if (!CONFIG_SERVICE_NAME) {
  console.warn(
    "CONFIG_SERVICE_NAME is not defined in the environment, using default name " +
      DEFAULT_CONFIG_SERVICE_NAME
  );
}

export {
  CONFIG_SERVICE_PORT,
  DEFAULT_CONFIG_SERVICE_PORT,
  CONFIG_SERVICE_NAME,
  DEFAULT_CONFIG_SERVICE_NAME,
};

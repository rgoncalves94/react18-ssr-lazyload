import winston, { format } from "winston";

const Log = winston.createLogger({
  format: format.combine(
    format.colorize(),
    format.splat(),
    format.simple()
  ),
  transports: [
    new winston.transports.Console(),
  ]
});

export { Log };

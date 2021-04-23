import { Request, Response } from 'express';

const envName = process.env.ENV_NAME || 'development';
const domainName = process.env.DOMAIN_NAME || 'dev.minns.local';

export const indexController = (_request: Request, response: Response): void => {
  response.status(200).send(`Hello World! This is the ${envName} server, run on ${domainName}`);
};

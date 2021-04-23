import { Request, Response } from 'express';

export const aboutController = (_request: Request, response: Response): void => {
  response.status(200).send('About Me!');
};

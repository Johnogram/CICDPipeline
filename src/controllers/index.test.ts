import { getMockReq, getMockRes } from '@jest-mock/express';
import { indexController } from './index';

describe('Health controller', () => {
  test('Correct http code and response is set', () => {
    // Arrange
    const { res } = getMockRes();
    const req = getMockReq();
    // Act
    indexController(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledTimes(1);
  });
});

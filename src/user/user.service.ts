import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  constructor() {}

  login(): string {
    return 'You have been logged in successfully.';
  }
}

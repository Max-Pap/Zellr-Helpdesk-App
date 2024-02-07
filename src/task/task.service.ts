import { Injectable } from '@nestjs/common';
@Injectable()
export class TaskService {
  constructor() {}

  getAllTasks(): string {
    return 'Here are all your tasks.';
  }
}

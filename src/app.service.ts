import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the backend submission for the Health Tech Solutions technical assignment project! Go to /api/docs to explore the API documentation.';
  }
}

import { ExpressRequest } from '@app/types/expressRequest.interface';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<ExpressRequest>();
    if (!request.user) {
      throw new HttpException(
        'You are not authorized to access this resource',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return true;
  }
}

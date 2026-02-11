import { Injectable } from '@nestjs/common';
import { AccountInterface } from '../posts/interfaces/user.interface';
@Injectable()
export class AccountService {
  readonly account: AccountInterface[] = []; // вместо сущностей используются интерфейсы к сущностям
}
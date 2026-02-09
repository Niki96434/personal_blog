import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService { 
  readonly account: AccountInterface[] = []; // вместо сущностей используются интерфейсы к сущностям

}
import { Controller, Get, HostParam } from "@nestjs/common";

@Controller({ host: ':account.blog.com' } )
export class AccountController {
    constructor(private AccountService: AccountService) {}
}
@Get()
getInfo(@HostParam('account') account: number){
    return account
}


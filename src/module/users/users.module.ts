import { ModuleContract } from '../../contract/module.contract';
import { method, Route } from '../../contract/route.contract';
import { GetUsersListCommand } from './command/get-users-list.command';

export class UsersModule implements ModuleContract {
    basePath = '/users';
    routes: Route[] = [
        {
            method: method.GET,
            path: '/list',
            command: GetUsersListCommand,
        },
    ];
}

import { Request } from 'express';
import { CommandContract } from '../../../contract/command.contract';
import { GetUsersDto } from './response-dto/get-users.dto';

export class GetUsersListCommand extends CommandContract {

    async run(req: Request): Promise<any> {
        return <GetUsersDto>{
            message: 'users list should be here',
        };
    }
}
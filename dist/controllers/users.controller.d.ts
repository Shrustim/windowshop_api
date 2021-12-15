import { TokenService } from '@loopback/authentication';
import { MyUserService } from '@loopback/authentication-jwt';
import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { UserProfile } from '@loopback/security';
import { Users } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersController {
    jwtService: TokenService;
    userService: MyUserService;
    user: UserProfile;
    usersRepository: UsersRepository;
    constructor(jwtService: TokenService, userService: MyUserService, user: UserProfile, usersRepository: UsersRepository);
    login(users: Users): Promise<{
        token: string;
    }>;
    create(users: Users): Promise<Users>;
    count(where?: Where<Users>): Promise<Count>;
    find(filter?: Filter<Users>): Promise<Users[]>;
    updateAll(users: Users, where?: Where<Users>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Users>): Promise<Users>;
    updateById(id: number, users: Users): Promise<void>;
    replaceById(id: number, users: Users): Promise<void>;
    deleteById(id: number): Promise<void>;
}

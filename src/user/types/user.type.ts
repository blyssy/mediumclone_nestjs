import { UserEntity } from '@app/user/user.entity';

//remove the hashPassword from the UserEntity
export type UserType = Omit<UserEntity, 'hashPassword'>;

import { UserType } from './user.type';

export interface UserResponseInterface {
  // this would be valid but not optimal
  //   user: {
  //     email: string;
  //     token: string;
  //     username: string;
  //     bio: string;
  //     image: string | null;
  //   };

  //better to use the UserEntity and extend it with the token
  user: UserType & { token: string };
}

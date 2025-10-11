export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: number;
  enabled: boolean;
  authorities: AuthoritiesModel[];
  username: string;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
}

export interface AuthoritiesModel {
  authority: string;
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  role: number;
  authorities: AuthoritiesModel[];
  // password: string;
  // enabled: boolean;
  // username: string;
  // accountNonExpired: boolean;
  // credentialsNonExpired: boolean;
}

export interface AuthoritiesModel {
  authority: string;
}

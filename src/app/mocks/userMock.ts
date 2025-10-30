import { UserModel } from '../models/user.model';

export const usersMock: UserModel[] = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phoneNumber: '+55 11 98765-4321',
    role: 1,
    authorities: [
      {
        authority: 'ROLE_ADMIN',
      },
    ],
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phoneNumber: '+55 21 91234-5678',
    role: 2,
    authorities: [
      {
        authority: 'ROLE_USER',
      },
    ],
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    phoneNumber: '+55 31 99876-5432',
    role: 2,
    authorities: [
      {
        authority: 'ROLE_USER',
      },
    ],
  },
];

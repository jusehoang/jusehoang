export interface User {
  id?: string;
  full_name: string;
  address?: string;
  tel: string;
  birth_day?: string;
  id_card?: string;
  role?: string;
  avatar?: string;
  username?: string;
  password?: string;
  is_request: boolean;
  is_active?: boolean;
}

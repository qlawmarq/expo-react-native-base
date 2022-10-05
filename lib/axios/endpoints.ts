import http from './http';
import { UserModel, SigninModel, Token, UserUpdateModel } from './model';

class ApiService {
  signup(data: UserModel) {
    return http.post('/v1/signup', data);
  }

  signin(data: SigninModel) {
    return http.post<{ user: UserModel; token: Token }>('/v1/signin', data);
  }

  updateUser(data: UserUpdateModel) {
    return http.post<UserModel>('/v1/user/update', data);
  }

  getUsers() {
    return http.get<UserModel[]>('/v1/users');
  }
}

export default new ApiService();

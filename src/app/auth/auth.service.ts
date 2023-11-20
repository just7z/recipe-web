import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDdzHjIdiJxNfllvrLWTXl53ZP13pLoYo',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }

  login(email: string, password: string) {
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDdzHjIdiJxNfllvrLWTXl53ZP13pLoYo',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
  }
}

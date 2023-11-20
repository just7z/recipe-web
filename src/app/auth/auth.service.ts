import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


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
    ).pipe(catchError(errorRes => {
      let errorMessage = 'An unknown error occured!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email is already registered!';
          break;
        case 'OPERATION_NOT_ALLOWED':
          errorMessage = 'Password sign-in is disabled for this project!';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          errorMessage = 'You have tried too many times, please wait for a few minutes.';
          break;
      }
      return throwError(errorMessage);
    }));
  }

  login(email: string, password: string) {
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDdzHjIdiJxNfllvrLWTXl53ZP13pLoYo',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(errorRes => {
      let errorMessage = 'An unknown error occured!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email is not registered!';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Password is incorrect, please check and re-try!';
          break;
        case 'USER_DISABLED':
          errorMessage = 'This user is disabled by Admin!';
          break;
      }
      return throwError(errorMessage);
    }));
  }
}

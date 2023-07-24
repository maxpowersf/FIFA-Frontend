import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          //client-side error
          errorMessage = 'Error: ' + err.error.message;
        } else {
          //server-side error
          errorMessage = 'Error ' + err.status + ': ' + err.message;
        }

        console.log(errorMessage);
        this.snackBar.open(errorMessage, '', {
          duration: 5000,
          panelClass: 'btn-danger',
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });

        return throwError(errorMessage);
      }),
    );
  }
}

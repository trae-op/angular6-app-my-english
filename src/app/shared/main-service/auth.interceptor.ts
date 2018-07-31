
import {HttpEvent, HttpHandler, HttpRequest, HttpInterceptor} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private localStorageService: LocalStorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = this.localStorageService.get('Authorization');

        if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', token) });
        }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}
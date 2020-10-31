import { AuthService } from './auth-service';

export class HttpInterceptor {

    private authService: AuthService;

    constructor() {
        this.authService = AuthService.Instance;
    }

    setAuthToken(request: any) {
        if (this.authService.isLoggedIn()) {
            request.set({ 'Authorization': 'Bearer ' + this.authService.token });
        }
        return request;
    }

}

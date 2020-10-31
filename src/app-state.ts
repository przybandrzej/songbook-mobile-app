
export class AppState {

    private static _token: string | undefined;

    public static set token(val: string | undefined) {
        AppState._token = val;
    }

    public static get token(): string | undefined {
        return AppState._token;
    }

}
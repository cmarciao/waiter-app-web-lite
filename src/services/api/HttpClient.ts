export class HttpClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    get(path: string) {
        return this.makeRequest(`${this.baseUrl}${path}`, {
            method: 'GET'
        });
    }

    patch(path: string, options: RequestInit) {
        return this.makeRequest(`${this.baseUrl}${path}`, {
            method: 'PATCH',
            body: options?.body,
            headers: options?.headers
        });
    }

    delete(path: string) {
        return this.makeRequest(`${this.baseUrl}${path}`, {
            method: 'DELETE'
        });
    }

    async makeRequest(path: string, options: RequestInit) {
        const headers = new Headers();

        if(options.body) {
            headers.set('Content-Type', 'application/json');
        }

        if(options.headers) {
            Object.entries(options.headers).forEach(([name, value]) => {
                headers.append(name, value);
            });
        }

        const response = await fetch(path, {
            method: options.method,
            body: JSON.stringify(options.body),
            headers
        });

        let responseBody = null;
        const contentType = response.headers?.get('Content-Type');

        if(contentType?.includes('application/json')) {
            responseBody = response.json();
        }

        return responseBody;
    }
}

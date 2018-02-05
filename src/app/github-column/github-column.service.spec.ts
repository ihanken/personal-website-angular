import { TestBed, inject } from '@angular/core/testing';

import { GithubColumnService } from './github-column.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Response, ResponseOptions } from '@angular/http';

describe('GithubColumnService', () => {
    let service: GithubColumnService;

    const mockHttpFunction = jest.fn(() => Observable.from([
        new Response(new ResponseOptions({
            body: {
                data: 'Hello'
            }
        }))]
    ));

    const mockHttpResponse = {
        '_body': {
            'data': 'Hello'
        },
        'headers': null,
        'ok': false,
        'status': null,
        'statusText': null,
        'type': null,
        'url': null
    };

    const mockHttp = {
        get: mockHttpFunction,
        post: mockHttpFunction,
        put: mockHttpFunction,
        delete: mockHttpFunction,
        patch: mockHttpFunction,
        head: mockHttpFunction,
        options: mockHttpFunction
    };

    beforeEach(() => {
        service = new GithubColumnService(mockHttp as any);
        service = new GithubColumnService(mockHttp as any);
        service = new GithubColumnService(mockHttp as any);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    describe('getHeaders()', () => {
        it('should return this.headers', () => {
            expect(service.getHeaders().get('Test')).toBe(null);

            service.setHeader('Test', 'Test');
            expect(service.getHeaders().get('Test')).toEqual('Test');
        });
    });

    describe('setHeaders()', () => {
        it('should set the value of this.headers', () => {
            expect(service.getHeaders().get('Test')).toBe(null);

            service.setHeader('Test', 'Test');
            expect(service.getHeaders().get('Test')).toEqual('Test');
        });
    });

    describe('removeHeaders()', () => {
        it('should remove a key-value pair from this.headers', () => {
            service.setHeader('Test', 'Test');
            expect(service.getHeaders().get('Test')).toBe('Test');

            service.removeHeader('Test');
            expect(service.getHeaders().get('Test')).toEqual(null);
        });
    });

    describe('get()', () => {
        it('should make a GET request', () => {
            service.get('hello').subscribe(
                response => {
                    expect(response).toEqual(mockHttpResponse);
                }
            );
        });
    });

    describe('post()', () => {
        it('should make a POST request', () => {
            service.post('hello', { data: 'Hello' }).subscribe(
                response => {
                    expect(response).toEqual(mockHttpResponse);
                }
            );
        });
    });

    describe('put()', () => {
        it('should make a PUT request', () => {
            service.put('hello', { data: 'Hello' }).subscribe(
                response => {
                    expect(response).toEqual(mockHttpResponse);
                }
            );
        });
    });

    describe('delete()', () => {
        it('should make a DELETE request', () => {
            service.delete('hello').subscribe(
                response => {
                    expect(response).toEqual(mockHttpResponse);
                }
            );
        });
    });

    describe('patch()', () => {
        it('should make a PATCH request', () => {
            service.patch('hello', { data: 'Hello' }).subscribe(
                response => {
                    expect(response).toEqual(mockHttpResponse);
                }
            );
        });
    });

    describe('head()', () => {
        it('should make a HEAD request', () => {
            service.head('hello').subscribe(
                response => {
                    expect(response).toEqual(mockHttpResponse);
                }
            );
        });
    });

    describe('options()', () => {
        it('should make a HEAD request', () => {
            service.options('hello').subscribe(
                response => {
                    expect(response).toEqual(mockHttpResponse);
                }
            );
        });
    });

    describe('createUrl()', () => {
        it('should return a built url with correct trailing slashes', () => {
            expect(service.createUrl('hello')).toEqual('https://api.github.com/hello');
            expect(service.createUrl('hello/')).toEqual('https://api.github.com/hello/');

            expect(service.createUrl('/hello')).toEqual('https://api.github.com/hello');
            expect(service.createUrl('/hello/')).toEqual('https://api.github.com/hello/');

            expect(service.createUrl('/')).toEqual('https://api.github.com/');
            expect(service.createUrl('')).toEqual('https://api.github.com/');

            expect(service.createUrl('///')).toEqual('https://api.github.com///');
        });
    });

    describe('getRequestOptions()', () => {
        it('should return this.requestOptions', () => {
            expect(service.getRequestOptions()).toBeDefined();
            expect(service.getRequestOptions({ url: 'www.testurl.com' })).toBeDefined();
        });
    });
});

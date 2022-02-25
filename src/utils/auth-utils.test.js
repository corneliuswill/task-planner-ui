import { fakeAuth, login } from './auth-utils';

describe('auth utils', () => {
    describe('fakeAuth', () => {
        it('is authenticated', () => {
            fakeAuth.authenticate();
            expect(fakeAuth.isAuthenticated).toBe(true);
        });

        it('is signed out', () => {
            fakeAuth.signout();
            expect(fakeAuth.isAuthenticated).toBe(false);
        });
    });

    describe('login', () => {
        it('is logged in', async () => {
            const fetchMock = jest
                .spyOn(global, 'fetch')
                .mockImplementation(() =>
                    Promise.resolve({ json: () => Promise.resolve([]) })
            )

            const json = await login();
            expect(fetchMock).toHaveBeenCalledWith('http://localhost:2300/login', {
                'body': undefined,
                'headers': {
                    'Authorization': 'Bearer ABCDE',
                    'Content-Type': 'application/json',
                },
                'method': 'POST'
            });
        })
    });
});
export const fakeAuth = {
    isAuthenticated: null,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
}

export async function login(credentials) {
  // return fetch('http://localhost:2300/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ABCDE'
  //   },
  //   body: JSON.stringify(credentials)
  // }).then(data => data.json())

  const res = await fetch('http://localhost:2300/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ABCDE'
    },
    body: JSON.stringify(credentials)
  });

  const json = await res.json();

  return json;
}
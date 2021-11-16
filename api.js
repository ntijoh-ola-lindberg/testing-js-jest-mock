async function login() {
  const result = await fetch('http://doesnt-matter-its-mocked');
  const r2 = await result.json()
  return r2;
}

async function logout() { throw 'Not implemented' }

module.exports = { login, logout }
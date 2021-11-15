async function login() {
  const result = await fetch('http://doesnt-matter-its-mocked');
  return result;
}

async function logout() { }

module.exports = { login, logout }
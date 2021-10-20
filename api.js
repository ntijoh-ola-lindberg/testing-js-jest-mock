async function getToken() {
  return "olas-token"
}

async function api() {
  let user = "ola"
  const result = await fetch(`https://url-spelar-ingen-rol-iom-att-den-ar-mockad/users/${user}/repos`, { method: 'GET', headers: { Authorization: `token ${await getToken()}` } });
  return result;
}
module.exports = api;

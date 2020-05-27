export function deleteCookie(key: string, domain: string) {
  document.cookie = `${key}=; Max-Age=0; path=/; domain=${domain}`;
}

export function getCookie(key: string) {
  console.log(`I was called by ${process.env.APP}!`);
  const v = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

export function storeCookie(key: string, value: string, domain: string) {
  document.cookie = `${key}=${value};domain=${domain}`;
}

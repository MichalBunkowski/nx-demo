import { deleteCookie, storeCookie, getCookie } from './cookies';


describe('cookies', () => {
  it('should receive stored value', () => {
    const key = "GREETINGS", value = "Hello There", domain = "super cool domain"

    expect(getCookie(key)).toBeFalsy()

    storeCookie(key, value, domain);

    expect(getCookie(key)).toEqual(value)

    deleteCookie(key, domain)

    expect(getCookie(key)).toBeFalsy()

  });
});

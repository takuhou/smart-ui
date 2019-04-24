const assert = require("assert");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Utils = require("../src/utils.js");

const resourceLoader = new jsdom.ResourceLoader({
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
});
const { window } = new JSDOM(``, { resources: resourceLoader });

describe('Utils', () => {
  it('useragentの取得', () => {
    const ua = Utils.ua;
    assert.equal('mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/73.0.3683.103 safari/537.36', ua);
  });

  it('chrome判定', () => {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    assert.equal('mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/73.0.3683.103 safari/537.36', ua);
  });


});
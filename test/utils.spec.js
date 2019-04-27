const assert = require("assert");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import Utils from "../src/utils.js";

describe('Utils', () => {
  it('useragentの取得', () => {
    const resourceLoader = new jsdom.ResourceLoader({
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
    });
    global.window = new JSDOM(``, { resources: resourceLoader }).window;
    assert.equal(window.navigator.userAgent.toLowerCase(), Utils.ua);
  });

  it('Chrome判定', () => {
    const resourceLoader = new jsdom.ResourceLoader({
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
    });
    global.window = new JSDOM(``, { resources: resourceLoader }).window;
    assert.equal(true, Utils.isChrome());
  });

  it('Safari判定', () => {
    const resourceLoader = new jsdom.ResourceLoader({
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15"
    });
    global.window = new JSDOM(``, { resources: resourceLoader }).window;
    assert.equal(true, Utils.isSafari());
  });

  it('Firefox判定', () => {
    const resourceLoader = new jsdom.ResourceLoader({
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0"
    });
    global.window = new JSDOM(``, { resources: resourceLoader }).window;
    assert.equal(true, Utils.isFirefox());
  });

  it('IE判定', () => {
    const resourceLoader = new jsdom.ResourceLoader({
      userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko"
    });
    global.window = new JSDOM(``, { resources: resourceLoader }).window;
    assert.equal(true, Utils.isIe());
  });

  it('Edge判定', () => {
    const resourceLoader = new jsdom.ResourceLoader({
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 13.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134"
    });
    global.window = new JSDOM(``, { resources: resourceLoader }).window;
    assert.equal(true, Utils.isEdge());
  });

  it('hasConicGradient対応ブラウザ', () => {
    const resourceLoader = new jsdom.ResourceLoader({
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
    });
    global.window = new JSDOM(``, { resources: resourceLoader }).window;
    assert.equal(true, Utils.hasConicGradient());
  });

  it('hasConicGradient非対応ブラウザ', () => {
    const resourceLoader = new jsdom.ResourceLoader({
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 13.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134"
    });
    global.window = new JSDOM(``, { resources: resourceLoader }).window;
    assert.equal(false, Utils.hasConicGradient());
  });

});

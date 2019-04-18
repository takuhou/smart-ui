export default class Utils {

  static get ua() {
    return window.navigator.userAgent.toLowerCase(); 
  }

  static isChrome = () => { 
    if (this.ua.indexOf('chrome') > 0) {
      return true;
    }
    return false;
  }

  static isSafari = () => {
    if (this.ua.indexOf('chrome') < 0 && this.ua.indexOf('safari') > 0) {
      return true;
    }
    return false;
  }
 
  static isFirefox = () => {
    if (this.ua.indexOf('firefox') > 0) {
      return true;
    }
    return false;
  }

  static isIe = () => {
    if (this.ua.indexOf('trident') > 0) {
      return true;
    }
    return false;
  }

  static isEdge = () => {
    if (this.ua.indexOf('edge') > 0) {
      return true;
    }
    return false;
  }

  static hasConicGradient = () => {
    if (this.isSafari() || this.isFirefox() || this.isIe() || this.isEdge()) {
      return false;
    } 
    return true;
  }
}

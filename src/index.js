import Utils from './utils.js';
import Svg from './svg.json';

export default class BoringDecision {
  constructor(settings) {
    this.limit = settings.limit || 2000;
    this.startColor = settings.startColor || "black";
    this.endColor = settings.endColor || "white";
    this.size = settings.size || 100;
    this.targetDom = document.getElementById("boring-decision");
    this.startTime = 0;
    this.timer = null;
    this.interval = 100;
    this.progress = 0;
  }

  start= () => {
    this.startTime = new Date().getTime();
    if (!this.timer) {
      this.timer = setInterval(this.counter, this.interval);
    }
  }

  stop= () => {
    clearInterval(this.timer);
    this.timer = null;
    const sec = document.getElementById('bd-second');
    sec.innerText = this.limit / 1000;

    const outerCircle = document.getElementById('bd-outer-circle');
    if (Utils.hasConicGradient()) {
      outerCircle.style.background = `conic-gradient(${this.startColor} 0deg, white 0deg 360deg)`;
    } else {
    // svg.jsを使う
      const svg = 'url("' + Svg.black[0] + '")';
      outerCircle.style.backgroundImage = svg;
    }
    this.progress = 0;
  }

  counter = () => {
    const now = new Date().getTime();
    const sec = document.getElementById('bd-second');
    sec.innerText = ((this.limit - (now - this.startTime)) / 1000).toFixed(1);

    this.progress = this.progress + (360 / (this.limit / 100));
    const outerCircle = document.getElementById('bd-outer-circle');

    if (Utils.hasConicGradient()) {
      outerCircle.style.background = `conic-gradient(${this.startColor} ${this.progress}deg, white 0deg 360deg)`;
    } else {
      // svg.jsを使う
      const svg = 'url("' + Svg.black[this.progress/18] + '")';
      outerCircle.style.backgroundImage = svg;
    }

    if (this.limit < now - this.startTime) {
      if (Utils.hasConicGradient()) {
        outerCircle.style.background = `conic-gradient(${this.startColor} 0deg, ${this.endColor} 0deg 360deg)`;
      } else {
        // svg.jsを使う
        const svg = 'url("' + Svg.black[20] + '")';
        outerCircle.style.backgroundImage = svg;
      }

      sec.innerText = 'OK';
      clearInterval(this.timer);
      this.timer = null;
      // callbackFunction();
    }
  }

  init = () => {
    const outerCircle = document.createElement('div');
    outerCircle.id = "bd-outer-circle";
    outerCircle.style.width = `${this.size}px`;
    outerCircle.style.height = `${this.size}px`;
    outerCircle.style.borderRadius = '50%';
    outerCircle.style.border = '1px solid gray';
    outerCircle.style.background = `conic-gradient(${this.startColor} 0deg, white 0deg 360deg)`;

    const button = document.createElement("button");
    button.id = "bd-button";
    button.style.width = `${this.size - 10}px`;
    button.style.height = `${this.size - 10}px`;
    button.style.borderRadius = '50%';
    button.style.border = 'none';
    button.style.marginTop = '5px';
    button.style.marginLeft = '5px';
    button.style.outline = 'none';
    button.oncontextmenu = () => {
      return false;
    };

    const second = document.createElement("div");
    second.id = "bd-second";
    second.innerText = this.limit / 1000;

    button.appendChild(second);
    outerCircle.appendChild(button);
    this.targetDom.appendChild(outerCircle);

    button.addEventListener('mousedown', this.start, false);
    button.addEventListener('mouseup', this.stop, false);
    button.addEventListener('mouseout', this.stop, false);
  }
}
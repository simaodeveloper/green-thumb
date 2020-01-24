export default {
  ANDROID: function () { return navigator.userAgent.match(/Android/i) },
  BLACKBERRY: function () { return navigator.userAgent.match(/BlackBerry/i) },
  IOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i) },
  OPERA: function () { return navigator.userAgent.match(/Opera Mini/i) },
  WINDOWS: function () { return navigator.userAgent.match(/IEMobile/i) },
  ANY: function () { return (this.ANDROID() || this.BLACKBERRY() || this.IOS() || this.OPERA() || this.WINDOWS()) }
};

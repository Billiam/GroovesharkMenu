var prefs = {
  SETTING_PREFER : 'prefer',
  
  PREFER_DEFAULT : 'listen',
  PREFER_LISTEN : 'listen',
  PREFER_PREVIEW : 'preview',
  
  sites : {
    'listen' : 'http://grooveshark.com',
    'preview' : 'http://preview.grooveshark.com'
  },
 
  getSiteUrl : function() {
    var setting = this.getPrefer();
    var site;
    if (site = this.sites[setting]) {
      return site;
    }
  },
    
  setPrefer : function(value) {
    if (this.sites[value]) {
      localStorage[this.SETTING_PREFER] = value;
    }
  },
  
  getPrefer : function() {
    var setting;
    if (setting = localStorage[this.SETTING_PREFER]) {
      return setting;
    } else {
      return this.PREFER_DEFAULT;
    }
  },
};
'use strict';

var utils = require('../../../utils/utils');
var BaseXform = require('../base-xform');

var PageSetupPropertiesXform = module.exports = function() {
};

utils.inherits(PageSetupPropertiesXform, BaseXform, {

  get tag() { return 'pageSetUpPr'; },

  render: function(xmlStream, model) {
    if (model && model.fitToPage) {
      xmlStream.leafNode(this.tag, {
        fitToPage: model.fitToPage ? '1' : undefined
      });
      return true;
    }
    return false;
  },

  parseOpen: function(node) {
    if (node.name === this.tag) {
      this.model = {
        fitToPage: node.attributes.fitToPage === '1'
      };
      return true;
    }
    return false;
  },
  parseText: function() {
  },
  parseClose: function() {
    return false;
  }
});

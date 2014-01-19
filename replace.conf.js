'use strict';

module.exports = {
  server: [
    {from: 'locale', to: 'en'},
    {from: 'googleAnalytics', to: 'UA-2117194-2'},
    {from: 'clientTopology.shoutoutStaticsUrl', to: ''},
    {from: 'clientTopology.shoutoutApiUrl', to: '/_api/shoutout-webapp/'},
    {from: 'clientTopology.shoutoutPartialsUrl', to: ''}
  ]
};

var _ = require('underscore');
function buildReplacements(collection) {
  return _.map(collection, function(value) {
    return {from: new RegExp('\\$'+value.from+'|\\$'+'{'+value.from+'}', 'g'), to: value.to};
  });
}
_.each(module.exports, function(value, key, list) {list[key] = buildReplacements(value);});

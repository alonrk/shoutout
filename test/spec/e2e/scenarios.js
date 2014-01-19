'use strict';

describe('shoutoutApp', function() {

  it('should redirect to index.html#/ by default', function() {
    browser().navigateTo('/index.html#/testDefault');
    expect(browser().location().url()).toBe('/');
  });
  
});

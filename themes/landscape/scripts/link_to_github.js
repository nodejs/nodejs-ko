/**
* link_to_github tag
*
* Syntax:
*   <%- link_to_github('account') %>
*   <%- link_to_github({account: 'Real Name'}) %>
*/

hexo.extend.helper.register('link_to_github', function(names){
  var linkTo = function (name, realName) {
    if (/ /.test(name)) {
      return '<strong>' + name + '</strong>';
    } else {
      return '<strong><a href="https://github.com/' + name + '">' +
             (realName || name) + '</a></strong>';
    }
  };
  var result = '';
  if (Array.isArray(names)) {
    for (var i in names) {
      result += linkTo(names[i]);
    }
  } else if (typeof names === 'string') {
    result += linkTo(names);
  } else {
    for (var name of Object.keys(names)) {
      result += linkTo(name, names[name]);
    }
  }

  return result;
});

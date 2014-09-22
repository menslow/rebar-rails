Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Patterns");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<header class=\"navigation\">\n  <div class=\"navigation-wrapper\">\n    <a href=\"javascript:void(0)\" class=\"logo\">\n      <img src=\"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png\" alt=\"\">\n    </a>\n    <a href=\"\" class=\"navigation-menu-button\" id=\"js-mobile-menu\">MENU</a>\n    <div class=\"nav\">\n      <ul id=\"navigation-menu\">\n        <li class=\"nav-link\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "patterns", options) : helperMissing.call(depth0, "link-to", "patterns", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n        <li class=\"nav-link\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n      </ul>\n    </div>\n  </div>\n</header>\n<section class=\"container\">\n  <section class=\"inner-content\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </section>\n</section>\n<footer>\n  &copy; 2014 Mister Machine, LLC\n</footer>\n");
  return buffer;
  
});

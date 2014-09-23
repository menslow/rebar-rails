Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "structure-navigation", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<section class=\"container\">\n  <section class=\"inner-content\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </section>\n</section>\n\n<footer class=\"footer\">\n  <div class=\"footer-logo\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "artwork-logo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"footer-links\">\n    <ul>\n      <li><h1>DEPICT</h1></li>\n    </ul>\n    <ul>\n      <li><h3>Content</h3></li>\n      <li><a href=\"javascript:void(0)\">About</a></li>\n      <li><a href=\"javascript:void(0)\">Contact</a></li>\n      <li><a href=\"javascript:void(0)\">Products</a></li>\n    </ul>\n    <ul>\n      <li><h3>Follow Us</h3></li>\n      <li><a href=\"javascript:void(0)\">Facebook</a></li>\n      <li><a href=\"javascript:void(0)\">Twitter</a></li>\n      <li><a href=\"javascript:void(0)\">YouTube</a></li>\n    </ul>\n    <ul>\n      <li><h3>Legal</h3></li>\n      <li><a href=\"javascript:void(0)\">Terms and Conditions</a></li>\n      <li><a href=\"javascript:void(0)\">Privacy Policy</a></li>\n    </ul>\n  </div>\n\n  <hr>\n\n  <p>Disclaimer area lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, nostrum repudiandae saepe.</p>\n  <p>Copyright &copy; 2014 <a href=\"//depict.com\">Depict, inc</a>.</p>\n</footer>\n");
  return buffer;
  
});

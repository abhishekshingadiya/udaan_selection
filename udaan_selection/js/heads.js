(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['heads'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <li>"
    + container.escapeExpression(((helper = (helper = helpers.head || (depth0 != null ? depth0.head : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"head","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n            <h5>HEADS::</h5>\r\n            <ol>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.heads : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ol>";
},"useData":true});
})();
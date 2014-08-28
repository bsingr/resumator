(function(){
  var resume = new Resume('/data/resume.json',
                          '/templates/resume.html');
  function Resume(dataUrl, templateUrl) {
    var that = this;
    $.get(dataUrl, function(data){
      that.data = data;
      that.render();
    });
    $.get(templateUrl, function(template){
      that.template = template;
      that.render();
    });
  }
  Resume.prototype.render = function(){
    var rendered;
    if (this.data && this.template) {
      rendered = Mustache.render(this.template, this.data);
      $('body').html(rendered);
    }
  }
})();

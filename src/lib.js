(function(){
  var editor = {
    initialize : function(){
      $(document).ready(this.onDomReady.bind(this));
    },
    onDomReady : function(){
      this.$contextMenu = $("#editor-contextmenu");
      this.$contentMenuOption = this.$contextMenu.find(".editor-contextmenu-option");
      this.$contextMenu.hide();
      this.bindEvents();
    },
    bindEvents : function(){
      $(document).on("contextmenu",this.openContextMenu.bind(this));
      this.$contentMenuOption.on("click",this.onContextOptionClick.bind(this));
    },
    trigger : function(eventName,param){
      $("body").trigger(eventName,param);
    },
    register : function(eventName,callback){
      $("body").on(eventName,callback)
    },
    openContextMenu : function(e){
      e.preventDefault();
      this.$contextMenu.css({
        "left" : e.clientX,
        "top" : e.clientY
      });
      this.$el = $(e.target);
      this.$contextMenu.show();
    },
    onContextOptionClick : function(e){
      var eventName = $(e.currentTarget).data("event");
      this.$contextMenu.hide();
      this.trigger(eventName,[e.currentTarget]);
    }
  }

  var navbar = {
    initialize : function(e,currentTarget){
      this.$template = $(currentTarget).find(".component").html();

      // this.$template = $(e.currentTarget)
      editor.$el.append(this.$template);
    }
  }

  editor.initialize();
  editor.register("navbar",navbar.initialize);

})();

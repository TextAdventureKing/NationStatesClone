NationStatesClone.Views.NationsIndex = Backbone.View.extend({
  template: JST['nations/index'],

  events: {
    "click .logout": "logout"
  },

  initialize: function (options) {
    this.currentNation = options.currentNation;
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      nations: this.collection,
      currentNation: this.currentNation
    });
    this.$el.html(content);
    return this;
  },

  logout: function (event) {
    $.ajax({
      url: "/api/nations/" + NationStatesClone.CURRENT_NATION.nation,
      dataType: "json",
      method: "DELETE",
      success: function () {
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});
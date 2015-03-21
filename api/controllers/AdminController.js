var AdminController = {
  index: function(req, res) {
    res.view('admin/index', {
      layout: 'layoutadmin'
    });
  },

}
module.exports = AdminController;

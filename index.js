module.exports = {
  hooks: {
    "page:before": function(page) {
      page.content = page.content.replace(/(<internal>)[\s\S]*(<\/internal>)/, '');
      return page;
    }
  }
}

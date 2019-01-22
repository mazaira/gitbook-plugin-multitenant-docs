module.exports = {
  hooks: {
    "page:before": function(page) {
      page.content = page.content.replace(/(\[internal\])[\s\S]*(\[\/internal\])/, '');
      // page.content = page.content.replace(/(\[external\])|(\[\/external\])/,'');
      return page;
    }
  }
}

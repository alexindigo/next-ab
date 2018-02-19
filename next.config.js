const cdnPrefix = process.env.CDN_PREFIX || '';

module.exports = {
  assetPrefix: cdnPrefix,

  // Need that to export just JS assests
  exportPathMap: function() {
    return {};
  }
};

const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const themeConfig = require("./config/themeConfig.js");

module.exports = {
  theme: "vdoing", // 使用npm包主题
  title: "blog",
  description: "vdoing博客主题模板",
  base: "/blog/", // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "Ov23liJLknOLIfX9bRnh",
        clientSecret: "5309d1408f85df7cdc59b7c745bd154afc3ed939",
        owner: "saukaguya",
        repo: "blog",
      },
    ],
  ],
  themeConfig,
};



const siteMetadata = {
  siteUrl: "https://news.buzzing.cc",
  author: `Buzzing`,
  locale: "zh",
  title: "Reddit 热门",
  shortTitle: "Reddit热门",
  description: "用中文浏览Reddit热门内容",
  keywords: ["buzzing", "reddit", "reddit中文", "reddit热门"],
  menuLinks: [
    {
      name: "每周精选",
      url: "/issues",
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Reddit`,
      url: `https://www.reddit.com`,
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing on Reddit`,
      shortTitle: "BuzzReddit",
      description: `See what's buzzing on Reddit in your native language`,
      keywords: ["buzzing", "reddit", "reddit top"],
      menuLinks: [
        {
          name: "Weekly Selection",
          url: "/en/issues",
        },
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Reddit 熱門",
      shortTitle: "Reddit熱門",
      description: "用中文瀏覽Reddit熱門內容",
      keywords: ["buzzing", "reddit", "reddit中文", "reddit熱門"],
      menuLinks: [
        {
          name: "每週精選",
          url: "/zh-Hant/issues",
        },
        {
          name: "RSS",
          url: "/zh-Hant/rss.xml",
          prefetch: false,
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};

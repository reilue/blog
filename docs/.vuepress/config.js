module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.png",
    displayAllHeaders: true,
    sidebar: [
      {
        title: "2021/January",
        collapsable: true,
        children: ["/2021/january/health-supplemets-2021"]
      },
      {
        title: "2020/December",
        collapsable: true,
        children: ["/2020/december/nuxt-and-contentful-to-build-a-multilanguage-webapp"]
      },
      {
        title: "2020/November",
        collapsable: true,
        children: ["/2020/november/learned-2-courses-from-zero-to-mastery", "/2020/november/how-to-applybyapi"]
      },
      {
        title: "2020/July",
        collapsable: true,
        children: ["/2020/july/pic-in-pic-project"]
      },
      {
        title: "2020/March",
        collapsable: true,
        children: ["/2020/march/migrate-from-venezuela", "/2020/march/migrate-vuecli-nuxt"]
      },
      {
        title: "2019/August",
        collapsable: true,
        children: ["/2019/august/create-category-in-datocms"]
      },
      {
        title: "2019/April",
        collapsable: true,
        children: [
          "/2019/april/using-linux-recovery-files-from-android-device",
          "/2019/april/quick-guide-setup-lamp-workflow"
        ]
      },
      {
        title: "2019/March",
        collapsable: true,
        children: [
          "/2019/march/an-opinionated-ionic-vue-workflow-for-single-app",
          //"/2019/march/does-cordova-plugins-compatiable-with-capacitor",
          "/2019/march/ionic4-workflow-multiapp-project"
        ]
      },
      {
        title: "2019/February",
        collapsable: true,
        children: [
          "/2019/february/my-first-bash-script",
          "/2019/february/storage-firebase-with-nuxt",
          "/2019/february/last-interview-job-task-1",
          "/2019/february/last-interview-job-task-2"
        ]
      }
    ],
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Portfolio",
        link: "https://eulier1.github.io/quieneseulier1/"
      },
      {
        text: "Linkedin",
        link: "https://linkedin.com/in/eulier-gonzalez-69079096"
      },
      { text: "Github", link: "https://github.com/eulier1" },
      {
        text: "Stack Overflow",
        link: "https://stackoverflow.com/users/5692051/yoarthur"
      },
      { text: "Twitter", link: "https://twitter.com/arthard101" }
    ]
  },
  plugins: [
    [
      'google-gtag',
      {
        'ga': 'G-XWDCEQMTCQ' // UA-00000000-0
      }
    ]
  ]
}

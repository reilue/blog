module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.png",
    displayAllHeaders: true,
    sidebar: [
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
        text: "Linkedin",
        link: "https://linkedin.com/in/eulier-gonzalez-69079096"
      },
      { text: "Github", link: "https://github.com/reilue" },
      {
        text: "Stack Overflow",
        link: "https://stackoverflow.com/users/5692051/yoarthur"
      },
      { text: "Twitter", link: "https://twitter.com/arthard101" }
    ]
  }
}

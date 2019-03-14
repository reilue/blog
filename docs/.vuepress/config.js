module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.png",
    displayAllHeaders: true,
    sidebar: [
      {
        title: "2019/February",
        collapsable: true,
        children: [
          "/2019/february/my-first-bash-script",
          "/2019/february/storage-firebase-with-nuxt",
          "/2019/february/last-interview-job-task-1",
          "/2019/february/last-interview-job-task-2"
        ]
      },
      {
        title: "2019/March",
        collapsable: true,
        children: [
          "/2019/march/an-opinionated-ionic-vue-workflow-for-single-app"
        ]
      }
    ]
  }
}

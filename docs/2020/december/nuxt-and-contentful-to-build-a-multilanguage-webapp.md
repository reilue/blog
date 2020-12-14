# A multi-language website with Nuxt & Contentful

I'll wrap this in 4 main topics.

- Technical
- Leadership
- Challenge
- Success

TL;DR:

- Time taken 12 days for **first time** using **contentful**
- **61 hrs** hours estimated. [Google Spreadsheet tracking my progress](https://docs.google.com/spreadsheets/d/1uSs_CXsNNNvZEekI5KXYC7-mRHgoOfNBdeNjP7LEp8I/edit#gid=1958905301)
- Contenful allows you 2 millions API calls, in it's free trier
- Show a couple of templates to client always and both agree the design to stick to it.

## Technical

### Step 1 - Set up the Environment

**Tools**

- Asus core i7 9th gen 💻
- Windows OS
- WSL - Ubuntu 20.04 OS
- Git
- VS Code

**Local Setup**

- Install [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

- Install [VSC](https://code.visualstudio.com/)

- Install [Git](https://git-scm.com/)
  Set up [ssh](https://docs.github.com/en/enterprise-server@2.20/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

- [Add Public Key to remote repo](https://docs.github.com/es/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

- [Add Keychain to workflow](https://www.cyberciti.biz/faq/ubuntu-debian-linux-server-install-keychain-apt-get-command/)

- Add on .bash_profile

  ```
  eval $(keychain --eval --agents ssh key1 key2 ...)
  ```

- [Setup node.js on wsl2 ](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2) ( for this project, stick to node v12.20.0 )

- [Setup git on wsl2](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-git)

- [Workflow to work with Git](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

**Contentful Setup**

- [Conteful Authentication](https://www.contentful.com/developers/docs/tutorials/cli/authentication/)

- [Set up Contentful with Nuxt](https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/)

**Contentful Technical Aspect**

- [Technical Limits](https://www.contentful.com/developers/docs/technical-limits/)

- [Fair Use Policy](https://www.contentful.com/r/knowledgebase/fair-use/)

- [Rich Text HTML Render](https://github.com/contentful/rich-text/tree/master/packages/rich-text-html-renderer)

## Leadership

### Step 2 - Strategy

- Buy a template to speed up development from Envato Market

- Integrate [Netlify](https://www.netlify.com/) as CI/CD in our github repo

- Set up the Content Models in [Contentful](https://www.contentful.com/)

- Let the content migration from Wordpress to Contentful be handle by the client

- [Integrate Contentful with Nuxt](https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/)

- [Set up & enable i18n from Contentful](https://www.contentful.com/developers/docs/tutorials/general/setting-locales/)

## Challenges

### Step 3 - Oh boy!

Familiarize with the concepts of Contentful, like:

- [CDA (Content Delivery API)](https://www.contentful.com/developers/docs/references/content-delivery-api/)

- [CMA (Content Management API)](https://www.contentful.com/developers/docs/references/content-management-api/)

- [Spaces](https://www.contentful.com/help/spaces-and-organizations/)

- [Content Type](https://www.contentful.com/developers/docs/concepts/data-model/)

- [Relational Types or Links](https://www.contentful.com/developers/docs/concepts/links/)

- [Entry](https://www.contentful.com/help/adding-new-entry/)

- [Fetch Data](https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/)

- [Nuxt integration](https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/)

- Define a Flat Model Structure to retrieve data A.K.A. the less Relational Types, the better to handle it.

- [Localization with Contentful](https://www.contentful.com/developers/docs/tutorials/general/setting-locales/)

## Success

### Step 4 - hurrah!, right?

- We were able to delivery the website and even improve couple of benchmark, for a first version. (**Note :** Netlify it's just a first iteration of the website)

- Time taken since setup up to this first iteration (**Note :** due **my first time** using **contentful**)
  - 11/27/2020 - 12/11/2020, **12 days**.
  - Hours **61 hrs** estimated. [Google Spreadsheet tracking my progress](https://docs.google.com/spreadsheets/d/1uSs_CXsNNNvZEekI5KXYC7-mRHgoOfNBdeNjP7LEp8I/edit#gid=1958905301)

Benchmark in Wordpress

![Benchmark in Wordpress](https://i.imgur.com/vKBlO1W.png)

Benchmark in Netlify

![Benchmark in Netlify](https://i.imgur.com/Iqv9Teg.png)

Well, because we **badly assume** the client would want such template we purchased, it turns out that's not what it wants. Nevertheless we still working now, again in the client side.

Well we have to deal with the consequence of our assumptions and move on.

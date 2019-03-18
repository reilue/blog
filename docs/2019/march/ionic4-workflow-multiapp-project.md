# Ionic 4 workflow for multi-app project

This is a awesome thing to do. **WHY?**, you can set a project for :

- Web
- Mobile

in the same repo (monorepo), easy to, **set, read and maintain**. And even **later** in the product development you can add **others developers** to work, with **easy integration** and almost few liverache.

## Requirements

[How Install Ionic](https://ionicframework.com/docs/installation/cli)

::: warning

This functionality is still a manual process ;)

:::

Following the [Multi-app Projects](https://ionicframework.com/docs/cli/configuration#multi-app-projects) configuration.

## Create a folder structure

    apps/
        myApp/
        myOtherApp/
    lib/
    ionic.config.json
    package.json

in the `ionic.config.json` set this configuration

```json
{
  "defaultProject": "myApp",
  "projects": {
    "myApp": {
      "name": "My App",
      "integrations": { "cordova": {} },
      "type": "angular",
      "root": "apps/myApp"
    },
    "myOtherApp": {
      "name": "My Other App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myOtherApp"
    }
  }
}
```

if you look closely, i've set **cordova** object. This is for mobile builds, that we'll find out later.

## Build project using Ionic Cli for Web dev

ok, for **myApp/** i gonna build a ionic project with **tabs** and for **myOtherApp/** a **sidemenu**

```bash
$ cd apps/myApp/
$ apps/myApp/ ionic start "myApp" tabs
$ cd apps/myOtherApp/
$ apps/myOtherApp/ ionic start "myOtherApp" sidemenu
```

here is the **manual part**, in **angular.json** from **myApp/** you must overwrite

    defaultProject: "myApp"
    ...
    "projects": {
        "myApp": {

and every option that involve a command for `build` or `serve` set with **myApp**, a easy way to look at is by searching this string in you editor text **app:** (remember include : ).

TL;DR replace **app:** with **myApp:**

Now do this for **angular.json** in **myOtherApp/**

Interesting part : you can actually run separate myApp & myOtherApp projects by doing this.

```bash
ionic serve --project myOtherApp
```

Which is awesome, to avoid mess up things and work ONLY in the project you need. :v: :relieved: :metal:

## Build project using Ionic Cli for Mobile dev

If you check in `ionic.config.json` i've set **cordova** object in the **integrations** key.

this **set-up** is for **Android** and **Linux Users**, ( i don't own a Mac or hardware capable of virtualize such OS good enough. I used to be a Window dev/user, but Linux is more powerful & fluid for developers ).

check [How to set up Android workflow](https://ionicframework.com/docs/installation/android)

**Java** is a big mod\*fuck3r pain in the kidney to install for beginners, so to make things easy for developer, i gonna write a workflow that i even use.

### Install & Set up Java

```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
sudo apt-get install oracle-java8-set-default
```

check if java was installed sucessfully.

```bash
java -version

java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

so to declare java as enviroment variable for single user session

```
nano ~/.bash_profile
```

Here let's gonna create the variables for

- JAVA
- Android Sdk

```
export JAVA_HOME=/usr/lib/jvm/java-8-oracle
export ANDROID_HOME=/home/art-uro/Android/Sdk

export PATH=$PATH:/usr/lib/jvm/java-8-oracle/bin
export PATH=$PATH:$ANDROID_HOME
```

save the file and follow the [How to install Android Studio for Mobile Development](https://ionicframework.com/docs/installation/android#android-studio)

When you finished configure everything.

In your root project run this command to build your project. It'll take several minutes the first time.

```bash
ionic cordova build android --project myApp
```

And voilá. :ok_hand:

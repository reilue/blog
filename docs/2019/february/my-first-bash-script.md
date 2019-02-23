# My first bash script :metal:

The process automatization is very powerful way to, save time to invest in other area (like listen new music, take a coffee with friend, writing thoughts, reading a new book, learning a new skill, watch memes in 9gag, ...) to enjoy life.

Back in the old days (before wash-machine was invented), women spend around 4-16 hours in weekends in laundry task. Right now thanks to the collaborative work, copy, test & error, we got this marverlous machine ( which is not her final form ) that give us a beautiful resource, time.

So, ( ok cool, but what is the point) **i want to play spotify in my laptop**, using a vpn and avoid to write this command

```bash
sudo openvpn --config ~/path-to-config-vpn-file
```

Over an over again. I know, it’s silly, but everything we do to learn, i consider it, have to be, **simple** and **applicable** to find out the purpose ( the Why ) of learn it.

Then, let’s define the steps to create a simple bash script. (Just 2 steps :thumbsup: )

## Requirements

Download the certificate from [VPNBook](https://www.vpnbook.com/) or other VPN solution.

for this demo i'll download "DE4 Server OpenVPN Certificate Bundle" from OpenVPN tab, unpacked and create a folder.

```bash
mkdir ~/.VPN/VPNBook.com-OpenVPN-DE4/
```

## 1. Create the script file

open terminal and create a file using nano ( a powerful terminal text editor ).

```bash
sudo nano /usr/bin/vpnspotify
```

Why /usr/bin? and not other folder?.

Well /usr/bin folder is the place where you put you utilities and applications relevant to user (also in /usr/bin/local).

For a deeper dive, check this out.
[Linux File System Tree](https://help.ubuntu.com/community/LinuxFilesystemTreeOverview)

OK, once the terminal is open.

![nano-bash-image](../../img/nanobash1.png)

Quickly explanation:

**#!** this caracter call shebang, is used in UNIX-like O.S. is to indicate a if a text file is executable. The program loader parse the rest of the file's initial line `/bin/bash` as an interpreter directive; the specified interpreter program is executed.

**openvpn** is a command to establish secure connections point to point, to bypass restriction by ip for example.

[OpenVPN](https://openvpn.net/vpn-server-resources/connecting-to-access-server-with-linux/)

**UPDATED**

Use

```bash
#!/usr/bin/env bash
```

instead of #!/bin/bash.

- The former searches the user's PATH to find the bash binary.
- The latter assumes it is always installed to /bin/ which can cause issues.

All thanks goes to

[Bash Bible](https://github.com/dylanaraps/pure-bash-bible#shebang)

## 2. Modify the permission with chmod

It’s important, after save the file, set in terminal.

```bash
chmod 755 /usr/bin/vpnspotify
```

Why 755? and not +x?.

it’s all about the way how permission ( read, write & execute programs ) works.

Each digit is a user permission, represent in a 3 bits to indicate the particular actions (read, write, execute) . From right to left it’s **Others**, **Group** & **Owner**.

| Read | Write | Execute | Number system |
| ---- | ----- | ------- | ------------- |
| 100  | 010   | 001     | Binary        |
| 4    | 2     | 1       | Decimal       |

So to make only the Owner can read, write & execute the program and let others user just read & execute, then the number is 755.

| Owner | Group | Others | Number system |
| ----- | ----- | ------ | ------------- |
| 111   | 101   | 101    | Binary        |
| 7     | 5     | 5      | Decimal       |

For a deeper explanation

[chmod -x vs chmod 755](https://askubuntu.com/questions/932713/what-is-the-difference-between-chmod-x-and-chmod-755)

SO… after modify the permission. Now i can run my first bash script. **And that’s all.** (for now)

Call in terminal by the name you save in nano ( in this case vpnspotify ).

```bash
vpnspotify
```

<div align="center">
  <img src="https://github.com/sampathgujarathi/fakeProfile/assets/66912066/6e4d4059-13aa-40a4-abb1-31543322f64a" alt="Banner Project" width="550">

  <h1><img src="https://i.imgur.com/iDlsg7L.png" alt="Lumi Logo" width="25"><strong>・fakeProfile</strong></h1>
  An <a href="https://vencord.dev/"><strong>all-in-one Vencord</strong></a> plugin to customize your Discord profile
</div>

<!-- MARKDOWN BADGED -->
<br>
<p align="center">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS"></a>
  <a href="https://discord.gg/ffmkewQ4R7"><img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord Server"></a>
  <br>
  <a href="https://vencord.dev"><img src="https://github.com/sampathgujarathi/fakeProfile/assets/66912066/d9a0c6ba-95c5-48bb-9600-5af16f93e39e" alt="Vencord Badge"/></a>
</p>

___

<!-- BODY -->

## 🖥️Selection

 - [fakeProfile](#fakeprofile)
   - [❓What is fakeProfile?](#what-is-fakeprofile)
   - [😍Compare plugins](#compare-plugins)
   - [🔨Installation](#installation)
   - [❓Tutorial about plugin](#tutorial-about-plugin)
   - [❔QnA](#qna)
   - [👍Contributors](#contributors)
   - [❤️Final words](#%EF%B8%8Ffinal-words)



## ❓What is fakeProfile?
<div align="center">
  <img src="https://github.com/sampathgujarathi/fakeProfile/blob/137947f167b631f6fdbd2ff07ba26e48016c5658/assets/profilepreview.png?raw=true" alt="Preview" width="500">
</div>

**fakeProfile** is a plugin for **Vencord** that supports all features related to nitro profile editing `without` the need to use individual plugins to create a complete profile with features such as:

> - ✅ Supports custom static and animated banner without need nitro[^1] [^2].
> - ✅ Supports custom static and animated avatar without need nitro[^1] [^2].
> - ✅ Supports choosing Discord's available badges and you can custom your own badges[^1] [^3].
> - ✅ Supports choosing Discord's available effect profiles without need nitro[^1] [^2].
> - ✅ Supports changing theme profile color without needing nitro[^1] [^3].
> - ✅ Supports selecting and custom decorations without needing nitro[^1] [^2].
> - ✅ Support show **fakeProfile** badges in chat[^1] [^3].
> - ✅ Supports approval of avatars, banners and badges using **AI** extremely quickly and conveniently. You won't have to wait too long for your request to be sent.
> - ✅ We pride ourselves on our plugin being the **`fastest`** and **`fully automatic`** refresh every **2 minutes** from the latest request being approved without having to reload Discord or restart the client and of course you can also refresh the plugin manually if you don't want to wait[^1] [^3].

[^1]: This feature is only available to users of this plugin.
[^2]: The feature only works when other plugins related to this feature are disabled because other plugins can override that plugin's features on this plugin.
[^3]: This feature may work with some other plugins.

## 😍Compare plugins
| Features | **fakeProfile** | **USRBG** | **UserPFP** | **GlobalBadges** | **FakeProfileThemes** | **Decor** |
|-----|-----|-----|-----|-----|-----|-----|
|Custom Banner|✅ **Support**|✅ **Support**|❌ **Not Support**|❌ **Not Support**|❌ **Not Support**|❌ **Not Support**|
|Custom Avatar|✅ **Support**|❌ **Not Support**|✅ **Support with CSS**|❌ **Not Support**|❌ **Not Support**|❌ **Not Support**|
|Custom Badge|✅ **Support**|❌ **Not Support**|❌ **Not Support**|✅ **Support**|❌ **Not Support**|❌ **Not Support**|
|Profile Themes|✅ **3y3 Style**|❌ **Not Support**|❌ **Not Support**|❌ **Not Support**|✅ **3y3 Style**|❌ **Not Support**|
|Profile Effects|✅ **Support**|❌ **Not Support**|❌ **Not Support**|❌ **Not Support**|❌ **Not Support**|❌ **Not Support**|
|Decoration|✅ **Support**|❌ **Not Support**|❌ **Not Support**|❌ **Not Support**|❌ **Not Support**|✅ **Support**|


## 🔨Installation
 ### 1. Requirement
 - The version you are using is **Vencord DEV Build**. If you don't know how to install then you can [click here](https://github.com/Vendicated/Vencord/blob/main/docs/1_INSTALLING.md) to read the installation instructions.
<details closed>
<summary>Video tutorial install Vencord DEV</summary>
<br>

- Youtube video install Vencord DEV Build by [@daveyy1](https://discordappuser.com/users/549244932213309442): *Click image below to watch tutorial*

 [![Tutorial Install Third Party Plugin](https://camo.githubusercontent.com/e30590c30a822b3a19fcba0e92cddb3b62aa1b09ac1a10e1958415e26d397090/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f387765786a536f38664e772f6d617872657364656661756c742e6a7067)](https://www.youtube.com/watch?v=8wexjSo8fNw)
</details>

 ### 2. Install Plugin
 Open **Windows Explorer** and select the path where you installed **Vencord** and click on the `src` folder. In the folder you just clicked, create a new folder named `userplugins` *(in case you already have that folder, you can skip creating the `userplugins` folder)*.

 - In the `userplugins` folder click on the address bar and type **cmd** and press **enter**.

 In **Command Prompt** used this command:
 ```shell
 git clone https://github.com/sampathgujarathi/fakeProfile.git
 ```

 After typing the command line, wait until the download is completed and then type:
 ```shell
 pnpm build
 ```
 And that all. Now you can restart Discord and check **fakeProfile** in **Plugins** setting.

 ### 3. How to update fakeProfile plugin?
 - Goto `Vencord\src\userplugins\fakeProfile` in adress bar type **cmd** and click to **Command Prompt** type:
 ```shell
 git pull
 ```
 - Then type:
 ```shell
 pnpm build
 ```
 - If you're not using vesktop then use this command to inject vencord:
 ```shell
 pnpm inject
 ```
 That all. Restart your Discord client and enjoy.



## ❓Tutorial about plugin
> [!NOTE]
> You must join our Discord server to request banners, avatars and badges. You can **[click here](https://discord.gg/ffmkewQ4R7)** and it will take you straight to our Discord server.
>
> If you want access **fakeProfile** channel you need pick this role in **Channel & Roles**
>
> ![Pick Role Image](https://i.imgur.com/Q77ykxM.png)

### 1. How to request banner?
<details closed>
<summary>Click to read</summary>
<br>

 - Goto [#fakeprofile-commands](https://discord.com/channels/1117373291095662623/1215640671457771540)
 - Used `/profile banner upload` command like image below:

 <img src="https://i.imgur.com/AtYO0kW.png" alt="profile banner upload">

 - All that's left for you is to wait until your request is approved in the [#fakeprofile-log](https://discord.com/channels/1117373291095662623/1215640664373465129) and wait 2 mins or reload manually is done.

</details>

### 2. How to request avatar?
<details closed>
<summary>Click to read</summary>
<br>

 - Goto [#fakeprofile-commands](https://discord.com/channels/1117373291095662623/1215640671457771540)
 - Used `/profile avatar upload` command like image below:

 <img src="https://github.com/sampathgujarathi/fakeProfile/assets/66912066/cd39bd4c-7226-496e-b08e-1c1cd8f12e81" alt="profile avatar upload">

 - All that's left for you is to wait until your request is approved in the [#fakeprofile-log](https://discord.com/channels/1117373291095662623/1215640664373465129) and wait 2 mins or reload manually is done.
</details>

### 3. How to choose a profile effect?
<details closed>
<summary>Click to read</summary>
<br>

 - Goto [#fakeprofile-commands](https://discord.com/channels/1117373291095662623/1215640671457771540)
 - Used command `/profile effects` `effects: Effect in options` like this:

  <img src="https://i.imgur.com/whE2fht.png" alt="profile effects">

 - When you feel the effect is suitable, press the **`Apply`** button to apply that effect.

  <img src="https://i.imgur.com/S574Rob.png" alt="profile effects preview">


 - After that wait 2 mins or reload manually is done.
</details>

### 4. How to request badge?
<details closed>
<summary>Click to read</summary>
<br>

 - Goto [#fakeprofile-commands](https://discord.com/channels/1117373291095662623/1215640671457771540)
 - Used command `/badges add` `Name` `Icon` like this:

 <img src="https://i.imgur.com/7tB0Zfz.png" alt="/badges add command">

 - Wait your request approved in [#fakeProfile-log](https://discord.com/channels/1117373291095662623/1215640664373465129) and wait 2 mins or reload manually is done.
</details>

### 5. How to manager and remove my badges?
<details closed>
<summary>Click to read</summary>
<br>

 - Goto [#fakeprofile-commands](https://discord.com/channels/1117373291095662623/1215640671457771540)
 - Used `/badges view` like this image:

 <img src="https://i.imgur.com/tNYpOpv.png" alt="badges view commands">

 - You can manager or remove badged with command

 <img src="https://i.imgur.com/KO2pjTR.png" alt="bageds manager">

 - Wait 2 mins or reload manually and done.
</details>

### 6. How to choose a avatar decorations?
<details closed>
<summary>Click to read</summary>
<br>

 - Goto [#fakeprofile-commands](https://discord.com/channels/1117373291095662623/1215640671457771540)
 - Used command `/profile decorations` `decoration: Decoration in options` like this:

  <img src="https://i.imgur.com/NVG7t5E.png" alt="avatar decorations">

 - When you feel the decoration is suitable, press the **`Apply`** button to apply that decoration.

  <img src="https://i.imgur.com/hSuqOmi.png" alt="avatar decorations preview">

 - After that wait 2 mins or reload manually is done.
</details>

### 7. How to changed profile theme color?
<details closed>
<summary>Click to read</summary>
<br>

 - Go to your profile settings
 - Choose your own colors in the Nitro preview
 - Click the "**Copy 3y3**" button
 - Paste the 3y3 text anywhere in your ***About Me***

  <img src="https://github.com/sang765/videoupload/blob/main/Discord_1ErcXCAVvA.gif?raw=true" alt="tutorial profile theme">
</details>

### 8. How to remove fakeProfile avatar and banner?
<details closed>
<summary>Click to read</summary>
<br>

 - Goto [#fakeprofile-commands](https://discord.com/channels/1117373291095662623/1215640671457771540)
 - With **avatar** use `/profile avatar remove` command:

  <img src="https://i.imgur.com/5jqetBQ.png" alt="avatar remove">

 - With **banner** use `/profile banner remove` command:

  <img src="https://i.imgur.com/5ARNAlR.png" alt="banner remove">

 - After send that commands wait 2 mins or reload manually is done.
</details>

## ❔QnA
<details closed>
<summary>Click to read</summary>
<br>

1. Can everyone in Discord see my profile?
 - No, everyone in Discord will not see about your Profile change but in case if they also use the fakeProfile plugin then they will see your change.

2. If I leave the Discord server, will everything on my profile be lost?
 - No, because your requests will be saved in the plugin's database, so if you leave the server, everything will not be affected. *(unless you turn off the fakeProfile plugin, everything will return to the way it was when you didn't use this plugin)*

3. So what happens if I disable fakeProfile plugin?
 - As I answered in the 2nd QnA, everything will return to the way it was before you used this plugin. Of course, you can still turn it back on if you want to use it, but if you don't want to use it anymore, you have the right to turn this plugin off.
</details>

## 👍Contributors
Thanks for all your support for this project.

<p align="center">
  <a href="https://github.com/sampathgujarathi/fakeProfile/graphs/contributors" style="pointer-events: none; cursor: default;"><img src="https://contrib.rocks/image?repo=sampathgujarathi/fakeProfile" alt="Contributors" width="200">
  </a>
</p>

## ❤️Final words
If you feel loved or interested in this project, you can leave us **1 star** and share this project with people who have the same needs as you. That will be a great motivation for we to continue developing this project to become much better. Thank you so much.
<p align="center">
  <a href="https://github.com/sampathgujarathi/fakeProfile" style="pointer-events: none; cursor: default;">
    <img src="https://m3-markdown-badges.vercel.app/stars/2/2//sampathgujarathi/fakeProfile" alt="Leave us a star" width="200">
  </a>
</p>

<!-- END -->

---
<br>
<div align="center">
  <img src="https://i.imgur.com/iDlsg7L.png" alt="Lumi Logo" width="100">
  <h6>@2023-2024 <strong>Lumi Comunity</strong></h6>
</div>

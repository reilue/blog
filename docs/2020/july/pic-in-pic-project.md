# Picture in Picture, a cool feature for the web

Picture-in-Picture made its first appearance on the web in the Safari browser with the release of macOS Sierra in 2016. It made it possible for a user to pop a video out into a small floating window that stays above all others, so that they can keep watching while doing other things. It’s an idea that came from TV.

There are 2 web API, relevant from it.
[MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream)
 and [Media Devices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia)

 Here is the code that i use from the course [20 Web Projects](https://academy.zerotomastery.io/p/javascript-projects)

![Demo  Video](http://i.imgflip.com/48c8pj.mp4)

Below i left the demo and repo url

html file
```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
<link rel="stylesheet" href="style.css">
<title>Picture in Picture</title>
</head>

<body>
<video src="" id="video" controls height="360" width="640" hidden></video>
<div class="button-container">
<button id="button">START</button>
</div>
<script src="script.js"></script>
</body>

</html>

```

js file

```js
const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
try {
const mediaStrem = await navigator.mediaDevices.getDisplayMedia()
videoElement.srcObject = mediaStrem;
videoElement.onloadedmetadata = () => {
videoElement.play()
}
} catch (error) {
console.log('Opa hay un error', error)
}
}

button.addEventListener('click', async () => {
// Disable button
button.disabled = true
// Start Picture in Picture 
await videoElement.requestPictureInPicture();
// Reset Button
button.disabled = false

})

// onLoad
selectMediaStream()
```

css file

```css
@import url('https://fonts.googleapis.com/css?family=Barlow&display=swap');

html {
    box-sizing: border-box;
}

body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
}

.button-container {
    border: 2px solid black;
    padding: 10px;
    border-radius: 7px;
    box-shadow: inset 0 20px 4px -19px rgba(255, 255, 255, 0.7);
}

button {
    cursor: pointer;
    outline: none;
    width: 120px;
    height: 75px;
    font-family: 'Barlow', sans-serif;
    font-size: 25px;
    color: white;
    text-shadow: 0 2px 5px black;
    background: linear-gradient(to top, #696969, #575757);
    border: 2px solid black;
    box-shadow: inset 0 20px 4px -19px rgba(255, 255, 255, 0.4), 0 12px 12px 0 rgba(0,0,0,0.3);
}

button:hover {
    background: linear-gradient(to bottom, #696969, #575757);
}

button:active {
    transform: translateY(3px);
    box-shadow: 0 6px 6px 0 rgba(0,0,0,0.3);
}
```

[Demo](https://reilue.github.io/pictureinpicture)

[Repo](https://github.com/reilue/pictureinpicture)

# ApplybyAPI, an interesting way to get qualified software engineers candidates

After finished, [Junior To Senior Web Developer](https://academy.zerotomastery.io/p/the-complete-junior-to-senior-web-developer-roadmap) & [Js Advanced Concepts](https://academy.zerotomastery.io/p/advanced-javascript-concepts) from [Zero To Mastery Academy](https://zerotomastery.io/), i jump in to find remote software developers jobs.

[RemoteOK](remoteok.io/) is a website created by [https://twitter.com/levelsio](https://twitter.com/levelsio), a digital nomad that i really appreciated, and in there i found a job post using [ApplybyAPI](https://applybyapi.com/)

## The process

    Send a POST request to https://applybyapi.com/gentoken/ with a valid JSON object in the POST body containing:
        a `posting` key
        the ID of this posting as the value

If your POST request is correct, you will receive a token that is valid for 5 minutes.

    Send a POST request to https://applybyapi.com/apply/ with:
        a content-type of multipart/form-data
        required fields token, name, and email
        supply your resume as an attachment (must be PDF) with the resume field name
        optional fields phone, employer, source, or comments

A successful application will return an application ID, and you will receive an email confirmation.

## How to do it

- Download [Postman](https://www.postman.com/)
- Send the `Post` message to generate the token.
  - **Note**: the `posting` value will **change** depend on the company job post, be careful.
    ![Token receive to send resume](https://i.imgur.com/cc6qMF0.png)
- Send the final `Post` which will contain your resume for the recruiters
  ![Resume sended using Postman](https://i.imgur.com/uiMb5G8.png)

**That's it**, congrats you now you'll receive an email confirmation.
If you didn't receive any email confirmation, try again, if the issue persist, keep looking my friend.

P.D.:
You can find also such courses on Udemy
[Junior to Senior Web Developer](https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap)
[Js Advanced Concepts](https://www.udemy.com/course/advanced-javascript-concepts/)

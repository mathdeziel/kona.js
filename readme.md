# kona.js

A simple, lightweight, self-contained library that facilitates registering key sequences with a callback.

### "Self-Contained?!" *-You*
Yup.  No need to load half the Internet!

### Use Cases

kona.js was developed with ease of use in mind for some particular use cases, such as:

- Adding **easter eggs** to your website;
- Registering **cheat codes** for your HTML5 game;
- Registering key sequences in your web app for **debugging** purpose.

## How to use

Include kona.js on your page.
```javascript
<script type="text/javascript" src="/path/to/kona.js"></script>
```

Create an instance of Kona and register a new key sequence with a callback function. 

Note : *The key sequence must be an array and supports some english words.  You may also use the numeric key code.*

Then, activate the registered sequence.

```javascript
<script>

    var konami_easteregg = new Kona();

    konami_easteregg.register(["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"], function() {
        alert("Unlimited lives!");
    }).activate();

</script>
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

*I hear and I forget. I see and I remember. I do and I understand.* -Confucius

I made this project because I needed something like that and felt like doing OSS style.  It works fine for my needs, but there is still room for improvement.

Having said that, feel free to use it or build upon it. If you do, [drop me line](https://www.twitter.com/mathdeziel), it will make me smile :)


Hello World HUD
===============

This is a small Hello World HUD for the [**Head-Up-Display Server
(HUDS)**](http://npmjs.com/huds), which acts as a small template for
craftig HUDs with the help of the frameworks Vue, Mousetrap and Anime
and intentionally without any build-time procedure like a bundler. It
also show-cases all essential features of HUDS with the smallest amount
of code.

This HUD does nothing more than display a small *Hello World* banner in
the top-left corner, but its colors and text can be configured and the
banner can be bounced by either pressing the SPACE key in an OBS Studio
interaction window or by sending the underlying REST event to HUDS.

Use the following steps to run the HUD it:

1.  Install this HUD either as an NPM package with...

    ```sh
    $ npm install huds-hud-hello
    ```

    ...or just clone its Git repository (in case you want to fiddle around
    with its source code) with:

    ```sh
    $ git clone https://github.com/rse/huds-hud-hello
    ```

2.  Start [HUDS](http://npmjs.com/huds) with either...

    ```sh
    $ huds -a 127.0.0.1 -p 9999 -U hello -P hello -d hello:@huds-hud-hello
    ```

    ...or (in case of a cloned repository):

    ```sh
    $ huds -a 127.0.0.1 -p 9999 -U hello -P hello -d hello:huds-hud-hello,huds-hud-hello/hello.yaml
    ```

    HUDS will display its logging output to the terminal.

2.  Start [OBS Studio](https://obsproject.com/)
    and add a [Browser Source](https://obsproject.com/wiki/Sources-Guide#browsersource)
    to any scene. As its URL use:

    ```
    http://hello:hello@127.0.0.1:9999/hello/
    ```

    If you want to interact with it, right-click onto the source and choose
    "Interact". You can press SPACE in the interaction window to let the
    Hello World banner bounce.

3.  Now you can also remotely trigger the bounce event with:

    ```sh
	curl -D- http://hello:hello@127.0.0.1:9999/hello/event/hello.bounce
    ```

    One convenient way to trigger the event during your broadcasting
    session is to use an [Elgato Stream Deck](https://www.elgato.com/en/gaming/stream-deck)
    remote control device and use its [System:Website](https://help.elgato.com/hc/en-us/articles/360028234471-Elgato-Stream-Deck-System-Actions) function.


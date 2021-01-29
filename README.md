# snowpack-svelte-demo

Forked from https://github.com/iagobruno/simple-svelte-app.

---

|      |      |      |
| ---- | ---- | ---- |
| ![](/public/images/home.png) | ![](/public/images/profile.png) | ![](/public/images/repo.png) |

## Getting started

```bash
> git clone https://github.com/iagobruno/snowpack-svelte-demo
> cd snowpack-svelte-demo
> yarn install
> yarn run dev
```

And then open [localhost:8080](http://http://localhost:8080) in your browser.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the sirv commands in package.json to include the option --host 0.0.0.0.

If you're using Visual Studio Code we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
> yarn run build
```

You can run the newly built app with `yarn run start`. This uses sirv, which is included in your package.json's dependencies so that the app will work when you deploy to platforms like Heroku.

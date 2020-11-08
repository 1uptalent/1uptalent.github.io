1uptalent.github.io
===================

1uptalent.com website

Requisites
=============
```
$ npm -v
7.0.8
$ node -v
v15.1.0
```

Setup
=======
Run `npm install`.

Run `rake prepare`.

This is also needed when changing bower dependencies (`source/bower.json`)

Developing
==========

Work in the `dev` branch, not over `master`. `master` is the generated website and published.

Run `middleman` and check the live site at `http://localhost:4567/`.

Testing
=======

Run `rake serve` to check the generated site `http://localhost:9090/`.

Publishing
==========

Run `middleman deploy` and voilà, the new version will be online.

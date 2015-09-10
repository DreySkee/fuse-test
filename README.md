# FUSE test

I made the page somewhat responsive with a breakpoint at 1140px. Most of the sections are fluid.
It was developed on a local server and all images have relative paths, so it has to be viewed on a server as well.

# Running the project

First install node packages:

```bash
npm install
```

You will want to run two consoles, the first builds LESS , second will have the server running.

To compile LESS:

```bash
gulp less
```

To start the node web server run:

```bash
gulp serve
```

To watch chages in LESS run:

```bash
gulp watch
```

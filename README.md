# Overleaf Dark Mode
hacky implementation of a dark mode for Overleaf. It works by injecting css and js into the project view, to enable custom dark-themed scroll bars (courtesy of [halfmoon](https://github.com/halfmoonui/halfmoon)) restyle some elements and prevent annoying white flashes on recompile, panel resizing and initial loading.

# Usage
- Install the [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/overleaf-dark-mode/) or the [Chrome extension](https://chrome.google.com/webstore/detail/overleaf-dark-mode/ikljddlmgjbaieelllmogbclikdadhnf?utm_source=chrome-ntp-icon)
- In Overleaf choose a dark theme for the left pane editor (`dracula` recommended).
- In your preamble include the following:
```
\usepackage{xcolor}
\pagecolor[rgb]{.118,.145,.188} %dark blue
\color[rgb]{.788,.82,.85} % light grey
```

This is a very simplistic approach and currently only works for documents with mainly text (no figures or custom environments like `listing` etc). Dont forget to remove these commands when exporting/printing.

# Planned improvements
- add dark mode to the menu sidebar, "Your projects" page and modals.
- programatically set themes for editor
- programatically insert latex snippets or circumvent using latex for the dark mode entirely

# GitHub Copilot CLI workshop

A hands-on workshop for [GitHub Copilot CLI](https://docs.github.com/copilot/concepts/agents/about-copilot-cli). Learners build, verify, and ship changes to the [Tailspin Toys](https://github.com/github-samples/tailspin-toys) demo app entirely from the terminal.

**Start the workshop:** <https://geektrainer.github.io/copilot-cli-workshop/>

The lessons are plain Markdown in [`docs/`](docs/) and can also be read directly on GitHub. The site is built with Astro + Starlight from [`website/`](website/) and deployed to GitHub Pages by [`.github/workflows/pages.yml`](.github/workflows/pages.yml) on every push to `main`.

## Preview locally

```sh
cd website
npm ci
npm run dev   # http://localhost:4321/copilot-cli-workshop/
```

This workshop is adapted from [Copilot Workshops](https://github.com/github-samples/copilot-workshops).

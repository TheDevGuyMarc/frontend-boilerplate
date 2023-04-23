![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/TheDevGuyMarc/Frontend-Boilerplate/ci.yml?style=for-the-badge)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/TheDevGuyMarc/Frontend-Boilerplate?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/TheDevGuyMarc/Frontend-Boilerplate?style=for-the-badge)
![GitHub all releases](https://img.shields.io/github/downloads/TheDevGuyMarc/Frontend-Boilerplate/total?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/TheDevGuyMarc/Frontend-Boilerplate?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/TheDevGuyMarc/Frontend-Boilerplate?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/TheDevGuyMarc/Frontend-Boilerplate?style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/TheDevGuyMarc/Frontend-Boilerplate?style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2023?style=for-the-badge)
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

<div align="center">
  <h1 align="center">Frontend Project Boilerplate</h1>

  <p align="center">
    Complete project boilerplate for frontend related projects
    <br />
    <br />
    <a href="https://github.com/TheDevGuyMarc/Frontend-Boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/TheDevGuyMarc/Frontend-Boilerplate/issues">Request Feature</a>
  </p>
</div>

## About the project

Building projects with standardized templates saves a lot of time. Instead of working on project structure, environments,
configuration and boilerplate code, one can focus on business logic. Besides that this ensures that the projects base,
is always good structured, clean, refactored and easy to maintain. This ensures a nice clean start of every project
and increases the likelihood of overall good practices.

Benefits of using this project template and this approach in general:

- Better focus on problem-solving
- Minimizing repetitive tasks
- Enforcing DRY principles
- Template fits most projects (but not all)

### Where can I use this template ?

This template is designed for frontend related projects. It is not limited to a specific framework or library. Here are some examples:

- Complete website (HTML, CSS/SCSS, JS/TS)
- SCSS Library
- JS/TS Library
- Sandbox
- Learning purposes (HTML, CSS/SCSS, JS/TS, Frontend workflow automation)

## Tech Stack

- [Typescript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Husky](https://www.npmjs.com/package/husky)
- [Eslint](https://eslint.org)
- [Sass](https://sass-lang.com)
- [Gulp](https://gulpjs.com)

## Features

- Everything is modular, testable, configurable, removable
- Complete Typescript implementation
- Workflow automation where possible

**Roadmap**

- [ ] Add more documentation
- [ ] Add [sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [ ] Add [gulp modernizer](https://www.npmjs.com/package/gulp-modernizr)
- [ ] Add [cache-busting](https://www.npmjs.com/package/gulp-buster)
- [ ] Add [gulp-notify](https://www.npmjs.com/package/gulp-notify)
- [ ] Add [gulp-purgecss](https://www.npmjs.com/package/gulp-purgecss)
- [ ] Add [caching](https://www.npmjs.com/package/gulp-cache) to image-optimization task like this [example](https://gist.github.com/lmonk72/0c37198e341902b9b617d2a20a5d501c)
- [ ] Add github workflows (CI)
- [ ] Add boilerplate code for scss and typescript

## Structure

```text
|- .github/             # Github Action (CICD) implementation
|- .husky/              # Pre-Commit configuration for lint staged
|- .vscode/             # VSCode configuration
|- gulp/                # Gulp tasks
|- docs/                # Documentation
|- src/                 # Source Code
|-- fronts/             # Fonts
|-- html/               # HTML source code
|-- json/               # JSON source code
|-- media/              # Images, Video, Icons, Sounds, etc.
|-- scss/               # SCSS source code
|-- typescript/         # Typescript source code
|- test/                # Define tests for functionality
|
|_ ...
```

## Getting Started

To start a new project with this template you can either just clone this repository, use this [template](https://github.com/TheDevGuyMarc/Frontend-Boilerplate/generate) or you can use the [yeoman generator]() written for it.

### Pre-Requisites

Before installation, make sure that you have the following pre-requisites up and running

**NPM**

```sh
    npm install npm@latest -g
    npm install -g yeoman
```

## Usage

To use this template, follow these steps:

- Write your code and save it to it's respective directory
- Run either gulp tasks or npm scripts to build, test, lint, etc.

The following tasks are available:

1. tasks:
    1. accessiblity -> Checks HTML files for accessibility issues
    2. branding -> Adds a header to every SASS/SCSS and Typescript file
    3. documentation -> Generates documentation from JSDoc comments
    4. fonts -> Copies fonts to the build directory
    5. html -> Validates and minifies html files and copies them to the build directory
    6. image-optimization -> Optimizes images and copies them to the build directory
    7. scss-lint -> Lints SCSS files
    8. scss -> Performs autoprefixing, media query merging, compilation and minification of SCSS files
    9. semver -> Bumps the version number in package.json
    10. seo -> Checks HTML files for SEO issues and optimizes them
    11. test -> Runs Jest tests
    12. ts-lint -> Lints Typescript files
    13. typescript -> Compiles and minifies Typescript files
    14. validate-json -> Validates JSON files
    15. watcher -> Watches for changes in the source code and runs the respective tasks
2. commands:
    1. build -> Builds the project
    2. clean -> Cleans the build directory
    3. default -> Runs the default tasks
    4. optimize -> Optimizes the project
    5. pre-commit -> Runs the pre-commit tasks
    6. test -> Runs the test tasks
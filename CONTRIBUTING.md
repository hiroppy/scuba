# Contributing
We would always be to welcome for you to contribute, no matter how large or small!

[issue](#issue)
[pull-request](#pullrequest)

## Issue
If you have discovered a bug or have a feature suggestion, welcome to create an issue.

## Pull-Request
Please check 3 tasks before submitting pull-request.
- [test](#test)
- [lint](#lint)
- [flow](#flow)

## Development
### Setup
```
$ git clone git@github.com:abouthiroppy/scuba.git
$ cd scuba
$ npm install
$ npm run storybook
$ open http://localhost:8080
```

### Test
```
$ npm run test
```

### Lint
```
$ npm run lint -- --fix
```
### Flow
```
$ npm run flow
```

## Documentation
If you change some documentation, please run build task and commit dist directory.

### Start
```
$ cd docs
$ npm i
$ npm start
$ open http://localhost:3000/
```
### build
```
$ npm run build
```

## Style Guide
We conform to Angular's commit message format.
Please read this page. [angular.js/Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)

## License
MIT

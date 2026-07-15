# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 4.0.0 (2024-08-18)

## [4.0.0-0](https://github.com/web-mech/badwords/compare/v3.0.4...v4.0.0-0) (2024-08-18)

### ⚠ BREAKING CHANGES

- this release moving forward is only intended for v4 onward. please upgrade and test with caution before using in production.

### Features

- add one more test case in filter ([2ab9783](https://github.com/web-mech/badwords/commit/2ab978315beb0a347f4af1f5ee33bd95d7d3e020))
- split string with backspace or underscore ([465d625](https://github.com/web-mech/badwords/commit/465d625debd165617cc446377de71c22515cbbd4))

### Bug Fixes

- **action:** install NPM dependencies ([b29c6c8](https://github.com/web-mech/badwords/commit/b29c6c82fbedcaf43548749c457a56407dbe0bc5))
- append single word filter test case ([43c8530](https://github.com/web-mech/badwords/commit/43c85301e644bbd4de5d587526ba0a9fa4cfed64))
- change filter title to not multilingual word ([cf8e4bc](https://github.com/web-mech/badwords/commit/cf8e4bc5996fb595a113c8c114886cec61715b68))

- v4 ([30d5d9f](https://github.com/web-mech/badwords/commit/30d5d9f014854fef4586a73e15a14d43832fe78e))

### [3.0.4](https://github.com/web-mech/badwords/compare/v3.0.3...v3.0.4) (2020-11-16)

<a name="3.0.3"></a>

## [3.0.3](https://github.com/web-mech/badwords/compare/v3.0.2...v3.0.3) (2019-07-25)

<a name="3.0.2"></a>

## [3.0.2](https://github.com/web-mech/badwords/compare/v3.0.1...v3.0.2) (2019-03-14)

### Bug Fixes

- **lang.json:** remove gay from badwords ([88d1aed](https://github.com/web-mech/badwords/commit/88d1aed))

<a name="3.0.1"></a>

## [3.0.1](https://github.com/web-mech/badwords/compare/v3.0.0...v3.0.1) (2019-02-19)

### Bug Fixes

- update removeWords functionality to be case-insensitive ([235121d](https://github.com/web-mech/badwords/commit/235121d))

<a name="3.0.0"></a>

# [3.0.0](https://github.com/web-mech/badwords/compare/v2.0.0...v3.0.0) (2018-10-23)

### Code Refactoring

- utilize es6 spread in addWords/removeWords ([656b87c](https://github.com/web-mech/badwords/commit/656b87c))

### BREAKING CHANGES

- changes the way addWords is used, no longer accepts a single array as a parameter unless used with the spread operator

<a name="2.0.0"></a>

# [2.0.0](https://github.com/web-mech/badwords/compare/v1.6.5...v2.0.0) (2018-10-23)

### Documentation

- update documentation. add requirements for using lib moving forward ([9b2831d](https://github.com/web-mech/badwords/commit/9b2831d))

### Features

- **profane:** support profane phrases and well as words ([995ea1e](https://github.com/web-mech/badwords/commit/995ea1e))

### BREAKING CHANGES

- moving into es2016+ language features

<a name="1.6.5"></a>

## [1.6.5](https://github.com/web-mech/badwords/compare/v1.6.4...v1.6.5) (2018-10-23)

<a name="1.6.4"></a>

## [1.6.4](https://github.com/web-mech/badwords/compare/v1.6.3...v1.6.4) (2018-09-21)

### Bug Fixes

- **isProfane:** Adding regex word boundary for isProfane ([3908f3c](https://github.com/web-mech/badwords/commit/3908f3c))

<a name="1.6.3"></a>

## [1.6.3](https://github.com/web-mech/badwords/compare/v1.6.2...v1.6.3) (2018-08-02)

<a name="1.6.2"></a>

## [1.6.2](https://github.com/web-mech/badwords/compare/v1.6.1...v1.6.2) (2018-08-02)

### Bug Fixes

- **isProfaneLike:** abort trying to match every instance of profane words. ([31126d6](https://github.com/web-mech/badwords/commit/31126d6))

<a name="1.6.1"></a>

## [1.6.1](https://github.com/web-mech/badwords/compare/v1.6.0...v1.6.1) (2017-10-25)

### Bug Fixes

- **isProfaneLike:** fix case sensitive checks within list ([bfa05ce](https://github.com/web-mech/badwords/commit/bfa05ce))

<a name="1.6.0"></a>

# [1.6.0](https://github.com/web-mech/badwords/compare/v1.5.2...v1.6.0) (2017-10-16)

### Features

- fixes and updates ([8049222](https://github.com/web-mech/badwords/commit/8049222))

<a name="1.5.2"></a>

## [1.5.2](https://github.com/web-mech/badwords/compare/v1.5.1...v1.5.2) (2017-10-16)

### Bug Fixes

- support for better filtering ([7c8d0e2](https://github.com/web-mech/badwords/commit/7c8d0e2))

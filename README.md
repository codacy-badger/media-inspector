# media-inspector

[![NPM package](https://img.shields.io/npm/v/media-inspector.svg)](https://www.npmjs.com/package/media-inspector)
[![CircleCI](https://circleci.com/gh/rasmuslp/media-inspector.svg?style=shield&circle-token=21fe02e13458f4ce20cd844453b47dbb540f32d8)](https://circleci.com/gh/rasmuslp/media-inspector)
[![codecov](https://codecov.io/gh/rasmuslp/media-inspector/branch/master/graph/badge.svg?token=W1WmybGFxx)](https://codecov.io/gh/rasmuslp/media-inspector)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b17230f59081472092c5578031885b37)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rasmuslp/media-inspector&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/b17230f59081472092c5578031885b37)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=rasmuslp/media-inspector&utm_campaign=Badge_Coverage)

> Find media files by searching in the metadata

## Requirements
  * Node 8 or newer
  * [mediainfo](https://mediaarea.net/en/MediaInfo) executable in `$PATH`

## Supported media mime-types
The current list of supported mime-types is
* `video/`

However, as Mediainfo is utilised for reading the metadata, it should be fairly simple to expand that to include both `audio` and `image/`.

## Installation
```bash
$ npm install -g media-inspector
```

## Use
```bash
$ media-inspector --read <path/to/directory> --filter <path/to/filter>
```

## Example
See the `examples` folder for examples of filters.
```bash
$ media-inspector --read <path/to/directory> --filter examples/filter-default.json --include-auxiliary --verbose
```
## How filters work
A `filter` is a list of `rules`. A `rule` is a prioritised list of `conditions`.
A `rule` is considered satisfied when all its `conditions` are satisfied.
When a media file satisfies all the `conditions` of *any* `rule`, that media-file is considered a match.

## Notes

  * [https://github.com/yargs/yargs]
  * [https://github.com/jshttp/mime-types#readme]
  * [https://github.com/mgcrea/node-mediainfo-parser]

## Test files
[https://www.sample-videos.com/about.php]


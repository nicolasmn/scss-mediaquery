# Scss Query ![](https://travis-ci.org/nicolasmn/scss-mediaquery.svg)

Simple and memorizeable `@media` queries helper function; build query strings defining a [mode](#parameter-mode) and a breakpoint name.

_Example:_
```scss
// Set custom breakpoints
$query-breakpoints: (
  'tall':    500px,
  'grande':  900px,
  'venti':  1400px
);

// @import query function

// Profit
@media #{query(min, tall)} {
  body::before { content: "only at screens with a min-width of 500px"; }
}
```

_Remember to [interpolate](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_) (`#{}`) functions in media queries._

**Protip**: Use `@include query(init, $query-breakpoints)` to (re)initialize `query()` function whenever you want. Refer to the [API](#api) for an overview of all the available runtime manipulation mixins.


## Installation

The recommended installation method is Bower but you can manually install `query()` function as well.

### Install using Bower
```bash
$ bower install --save scss-query
```

### Install via file download
You can always just [download this repository](https://github.com/nicolasmn/scss-mediaquery/archive/master.zip) into your project and `@import` it.


## Usage

The initial example should cover pretty much everything there is to know for basic usage. But let's quick-start you even more: 

### with [Bootstrap](http://getbootstrap.com/)
```scss
// v4
$query-breakpoints: $grid-breakpoints;

// v3
$query-breakpoints: (
  'xs': $screen-xs-min,
  'sm': $screen-sm-min,
  'md': $screen-md-min,
  'lg': $screen-lg-min
);
```

### with [Foundation](http://foundation.zurb.com/)
```scss
// v6
$query-breakpoints: $breakpoints;

// v5
$query-breakpoints: (
  'small':  $small-breakpoint,
  'medium': $medium-breakpoint,
  'large':  $large-breakpoint,
  'xlarge': $xlarge-breakpoint
);
```

### with [Semantic UI](http://semantic-ui.com/)
Semantic UI uses LESS internally, however there are some SCSS ports around. So just in case you are using one of them:
```scss
$query-breakpoints: (
  'mobile':            $mobileBreakpoint,
  'tablet':            $tabletBreakpoint,
  'computer':          $computerBreakpoint,
  'largeMonitor':      $largeMonitorBreakpoint,
  'widescreenMonitor': $widescreenMonitorBreakpoint
);
```


## Function `query(` `mode` `, ` `size` `)`

### Parameter `mode`

Mode can be one of the following:

- `min` - Min breakpoints
- `max` - Max breakpoints
- `only` - Min and max breakpoints

In case mode is `max` or `only` 1px will be substracted from max breakpoint value to prevent conflicting breakpoints. If breakpoint value is not in pixels, conversion will be handled trough a function named after breakpoint value unit – for `em` there is a fallback integrated.

If mode is `only`, max size will be next breakpoint in context.

### Parameter `size`

Key in `$query-breakpoints`.

`query()` function ships with a list of common screen sizes as default breakpoints. These are just for a quick start and it is recommended to change them to fit your design.

#### Defaults
Defaults are in pixels. However, if you want to use another value like `em` you can do that too. Remember to set `$query-breakpoints` **before** importing `query()` function in order to overwrite the defaults.

```scss
$query-breakpoints: (
  'micro':   320px,
  'mini':    480px,
  'small':   768px,
  'medium':  960px,
  'large':  1440px,
  'huge':   2560px,
  'giant':  5120px
) !default;
```


## API

The API allows for runtime manipulation of `query()` context. The following methods are provided as mixin via `@include query($method, $args...)`:

- `add` - Add a new breakpoint
- `remove` - Remove an existing breakpoint
- `set` - Set one or multible existing breakpoints at once
- `reset` - Reset context (aka remove all breakpoints)
- `init` - Initialise query function by passing a map
- `use` - Use a breakpoint while in mixin's `@content`

See [query/_api.scss](query/_api.scss) for documentation on the individual mixins.


## Contributing

As an open-source project, contributions are more than welcome, they're extremely helpful and actively encouraged. In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/). If you see any room for improvement, open an [issue](https://github.com/nicolasmn/scss-query/issues) or submit a [pull request](https://github.com/nicolasmn/scss-query/pulls).


## License

This project is provided under the terms of the [MIT License](LICENSE).


---

Authored by **Nicolas Müller Noulezas** · [Github](https://github.com/nicolasmn) · [Twitter](https://twitter.com/nicolasmn) · [CodePen](https://codepen.io/nicolasmn)

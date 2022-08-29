<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# dsort2ins

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.



<section class="usage">

## Usage

```javascript
import dsort2ins from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsort2ins@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-ext-base-dsort2ins/tags). For example,

```javascript
import dsort2ins from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsort2ins@v0.0.10-deno/mod.js';
```

#### dsort2ins( N, order, x, strideX, y, strideY )

Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array `x` using insertion sort.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

dsort2ins( x.length, 1.0, x, 1, y, 1 );

console.log( x );
// => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array `x` is sorted in **decreasing** order. If `order > 0.0`, the input strided array `x` is sorted in **increasing** order. If `order == 0.0`, the input strided arrays are left unchanged.
-   **x**: first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: `x` index increment.
-   **y**: second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: `y` index increment.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to sort every other element

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
var N = floor( x.length / 2 );

dsort2ins( N, -1.0, x, 2, y, 2 );

console.log( x );
// => <Float64Array>[ 3.0, -2.0, 1.0, -4.0 ]

console.log( y );
// => <Float64Array>[ 2.0, 1.0, 0.0, 3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Sort every other element...
dsort2ins( N, -1.0, x1, 2, y1, 2 );

console.log( x0 );
// => <Float64Array>[ 1.0, 4.0, 3.0, 2.0 ]

console.log( y0 );
// => <Float64Array>[ 0.0, 3.0, 2.0, 1.0 ]
```

#### dsort2ins.ndarray( N, order, x, strideX, offsetX, y, strideY, offsetY )

Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array `x` using insertion sort and alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

dsort2ins.ndarray( x.length, 1.0, x, 1, 0, y, 1, 0 );

console.log( x );
// => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: `x` starting index.
-   **offsetY**: `y` starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );

dsort2ins.ndarray( 3, 1.0, x, 1, x.length-3, y, 1, y.length-3 );

console.log( x );
// => <Float64Array>[ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]

console.log( y );
// => <Float64Array>[ 0.0, 1.0, 2.0, 5.0, 3.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions leave `x` and `y` unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^2)`.
-   The algorithm is efficient for **small** strided arrays (typically `N <= 20`) and is particularly efficient for sorting strided arrays which are already substantially sorted.
-   The algorithm is **stable**, meaning that the algorithm does **not** change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   The input strided arrays are sorted **in-place** (i.e., the input strided arrays are **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import dsort2ins from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsort2ins@deno/mod.js';

var rand;
var sign;
var x;
var y;
var i;

x = new Float64Array( 10 );
y = new Float64Array( 10 ); // index array
for ( i = 0; i < x.length; i++ ) {
    rand = round( randu()*100.0 );
    sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
    y[ i ] = i;
}
console.log( x );
console.log( y );

dsort2ins( x.length, -1.0, x, -1, y, -1 );
console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dsortins`][@stdlib/blas/ext/base/dsortins]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsort2ins`][@stdlib/blas/ext/base/gsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssort2ins`][@stdlib/blas/ext/base/ssort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dsort2ins.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dsort2ins

[test-image]: https://github.com/stdlib-js/blas-ext-base-dsort2ins/actions/workflows/test.yml/badge.svg?branch=v0.0.10
[test-url]: https://github.com/stdlib-js/blas-ext-base-dsort2ins/actions/workflows/test.yml?query=branch:v0.0.10

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dsort2ins/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dsort2ins?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dsort2ins.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dsort2ins/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dsort2ins/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dsort2ins/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dsort2ins/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dsort2ins/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dsort2ins/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsortins]: https://github.com/stdlib-js/blas-ext-base-dsortins/tree/deno

[@stdlib/blas/ext/base/gsort2ins]: https://github.com/stdlib-js/blas-ext-base-gsort2ins/tree/deno

[@stdlib/blas/ext/base/ssort2ins]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->


# wrap-text

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/wrap-text.svg)](https://www.npmjs.com/package/wrap-text) [![Downloads](https://img.shields.io/npm/dt/wrap-text.svg)](https://www.npmjs.com/package/wrap-text) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Wrap text by a given width.

## :cloud: Installation

```sh
$ npm i --save wrap-text
```


## :clipboard: Example



```js
const wrapText = require("wrap-text");

// Default width (80 chars)
console.log(wrapText("Amet ad minima expedita dicta itaque cum debitis odio cupiditate, animi. Libero maiores quisquam consequuntur maiores nihil nobis. Cumque suscipit asperiores voluptate magnam iste suscipit reprehenderit adipisci quasi. Officia quia."));
// =>
// Amet ad minima expedita dicta itaque cum debitis odio cupiditate, animi. Libero
// maiores quisquam consequuntur maiores nihil nobis. Cumque suscipit asperiores


// 20 width
console.log(wrapText(
    "Lorem vitae quasi quaerat et consectetur quis ea! Eos unde repellendus soluta eaque accusamus deserunt maiores? Facere nihil architecto facilis fuga quidem? Nostrum animi consectetur quis atque architecto totam molestias."
  , 20
));
// =>
// Lorem vitae quasi
// quaerat et
// consectetur quis ea!
// Eos unde repellendus
// soluta eaque
// accusamus deserunt
// maiores? Facere nihil
// architecto facilis
// fuga quidem? Nostrum
// animi consectetur
// quis atque architecto

// Multiline text
console.log(wrapText(
    `Elit voluptate magni exercitationem voluptatem consequatur inventore. Incidunt reiciendis laudantium vero a voluptas quam! Quod officia consectetur eaque perspiciatis modi. Cumque temporibus earum mollitia deleniti autem nam facilis neque tenetur?

Amet reprehenderit nesciunt eius magnam doloribus porro voluptatum. Repudiandae voluptatum neque neque quos adipisci accusamus. Sunt esse incidunt aperiam voluptate id unde quasi. Ad distinctio minus ad eius perferendis autem.
Lorem eius ullam vero sequi exercitationem maiores nam possimus. Perspiciatis tempore magnam nostrum expedita blanditiis quas laboriosam ipsam corporis. Est quasi ullam vero laborum perspiciatis eius eos aut. Libero ab.`
  , 50
));
// =>
// Elit voluptate magni exercitationem voluptatem
// consequatur inventore. Incidunt reiciendis
// laudantium vero a voluptas quam! Quod officia
// consectetur eaque perspiciatis modi. Cumque
// temporibus earum mollitia deleniti autem nam
// facilis neque tenetur?
//
// Amet reprehenderit nesciunt
// eius magnam doloribus porro voluptatum. Repudiandae
// voluptatum neque neque quos adipisci accusamus.
// Sunt esse incidunt aperiam voluptate id unde quasi.
// Ad distinctio minus ad eius perferendis
// autem.
// Lorem eius ullam vero sequi exercitationem
// maiores nam possimus. Perspiciatis tempore magnam
// nostrum expedita blanditiis quas laboriosam ipsam
// corporis. Est quasi ullam vero laborum perspiciatis
```

## :memo: Documentation


### `wrapText(input, width)`
Wrap text by a given width.

#### Params
- **String** `input`: The input text.
- **Number** `width`: The wrapping width.

#### Return
- **String** The wrapped text.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

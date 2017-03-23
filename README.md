
# wrap-text

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/wrap-text.svg)](https://www.npmjs.com/package/wrap-text) [![Downloads](https://img.shields.io/npm/dt/wrap-text.svg)](https://www.npmjs.com/package/wrap-text)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

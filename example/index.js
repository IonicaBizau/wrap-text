"use strict";

const wrapText = require("../lib");



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

console.log("\n\n\n\n")

// Multiline text with break
console.log(wrapText(
  `Elit voluptate magni exercitationem voluptatem consequatur inventore. Incidunt reiciendis laudantium vero a voluptas quam! Quod officia consectetur eaque perspiciatis modi. Cumque temporibus earum mollitia deleniti autem nam facilis neque tenetur?

Amet reprehenderit nesciunt eius magnam doloribus porro voluptatum. Repudiandae voluptatum neque neque quos adipisci accusamus. Sunt esse incidunt aperiam voluptate id unde quasi. Ad distinctio minus ad eius perferendis autem.
Lorem eius ullam vero sequi exercitationem maiores nam possimus. Perspiciatis tempore magnam nostrum expedita blanditiis quas laboriosam ipsam corporis. Est quasi ullam vero laborum perspiciatis eius eos aut. Libero ab.`
, 50, true
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

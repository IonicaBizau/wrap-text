"use strict";

const wrapText = require("../lib");

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

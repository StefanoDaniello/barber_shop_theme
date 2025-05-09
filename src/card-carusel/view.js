/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log("Hello World! (from myblocks-card-carusel block)");
/* eslint-enable no-console */

// import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// document.addEventListener("DOMContentLoaded", function () {
// 	const carousels = document.querySelectorAll(
// 		".wp-block-myblocks-card-carusel .swiper",
// 	);

// 	carousels.forEach((el) => {
// 		new Swiper(el, {
// 			loop: false,
// 			spaceBetween: 10,
// 			allowTouchMove: true,
// 			slidesPerView: 4,

// 			breakpoints: {
// 				1440: {
// 					slidesPerView: 4,
// 				},
// 				1024: {
// 					slidesPerView: 3,
// 				},
// 				768: {
// 					slidesPerView: 2,
// 				},
// 				480: {
// 					slidesPerView: 1,
// 				},
// 			},
// 		});
// 	});
// });

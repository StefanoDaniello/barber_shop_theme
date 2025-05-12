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
document.addEventListener("DOMContentLoaded", function () {
	const el = document.querySelector(".swiper-client-reviews");
	if (!el) return;
	const autoplayAttr = el.dataset.autoplay == true;

	if (typeof Swiper !== "undefined") {
		new Swiper(el, {
			loop: false,
			spaceBetween: 0,
			navigation: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			slidesPerView: 1,
			autoplay: autoplayAttr ? { delay: 3000 } : false,
			allowTouchMove: true,
		});
	} else {
		console.warn("Swiper non è stato caricato.");
	}
});

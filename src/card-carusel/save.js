/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { useBlockProps } from "@wordpress/block-editor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Save({ attributes }) {
	const { slides, overlayColor, textColor } = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="bg-white text-black">Ciao sono bello</div>
		</div>
	);
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import {
	useBlockProps,
	RichText,
	MediaUpload,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, Button, ColorPalette } from "@wordpress/components";
// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
import "./editor.scss";
import { __ } from "@wordpress/i18n";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Edit({ attributes, setAttributes }) {
	const { slides, overlayColor, textColor } = attributes;

	const blockProps = useBlockProps();

	// Funzione per aggiornare i dettagli di ogni slide
	const updateSlide = (index, field, value) => {
		const newSlides = [...slides];
		newSlides[index][field] = value;
		setAttributes({ slides: newSlides });
	};

	// Funzione per aggiungere una nuova slide
	const addSlide = () => {
		const newSlides = [...slides, { imageUrl: "", category: "", title: "" }];
		setAttributes({ slides: newSlides });
	};
	// Funzione per rimuovere slide
	const removeSlide = () => {
		const newSlides = [...slides];
		newSlides.pop();
		setAttributes({ slides: newSlides });
	};

	// Funzione per cambiare colore di overlay e testo
	const updateOverlayColor = (color) => {
		setAttributes({ overlayColor: color });
	};

	const updateTextColor = (color) => {
		setAttributes({ textColor: color });
	};
	return (
		<div {...blockProps}>
			<div className="bg-white">
				<InspectorControls>
					<PanelBody title={__("Slide Settings", "text-domain")}>
						<ColorPalette
							value={overlayColor}
							onChange={updateOverlayColor}
							label={__("Overlay Color", "text-domain")}
						/>
						<ColorPalette
							value={textColor}
							onChange={updateTextColor}
							label={__("Text Color", "text-domain")}
						/>
					</PanelBody>
				</InspectorControls>

				<div className="container flex justify-between mx-auto items-center min-h-20">
					<Button
						onClick={removeSlide}
						isPrimary
						className="!bg-red-500"
						disabled={slides.length == 1 || !slides.length}
					>
						{__("remove Slide", "text-domain")}
					</Button>
					<Button onClick={addSlide} isPrimary disabled={slides.length == 4}>
						{__("Add Slide", "text-domain")}
					</Button>
				</div>

				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={0}
					pagination={false}
					autoplay={false}
					loop={false}
					allowTouchMove={true}
					slidesPerView={4}
					breakpoints={{
						1440: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 2,
						},
						480: {
							slidesPerView: 1,
						},
					}}
					className="overflow-x-hidden "
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index} className=" h-[512px] relative">
							{!slide.imageUrl ? (
								<MediaUpload
									onSelect={(media) =>
										updateSlide(index, "imageUrl", media.url)
									}
									allowedTypes={["image"]}
									value={slide.imageUrl}
									render={({ open }) => (
										<div className="flex justify-center items-center h-full">
											<Button
												onClick={open}
												className="button button-large"
												isPrimary
											>
												{__("Aggiungi immagine", "text-domain")}
											</Button>
										</div>
									)}
								/>
							) : (
								<MediaUpload
									onSelect={(media) =>
										updateSlide(index, "imageUrl", media.url)
									}
									allowedTypes={["image"]}
									value={slide.imageUrl}
									render={({ open }) => (
										<div
											onClick={open}
											className="w-full h-[512px] p-0 m-0"
											style={{
												cursor: "pointer",
												display: "inline-block",
											}}
										>
											<img
												src={slide.imageUrl}
												alt={slide.title}
												className="w-full h-full object-cover"
											/>
										</div>
									)}
								/>
							)}

							{slide.imageUrl && (
								<div
									className="absolute bottom-5 right-5 p-4"
									style={{
										backgroundColor: overlayColor,
										zIndex: 10,
									}}
								>
									<RichText
										tagName="p"
										value={slide.category}
										onChange={(value) => updateSlide(index, "category", value)}
										placeholder={__("Category", "text-domain")}
										className="text-sm"
										style={{ color: textColor }}
									/>
									<RichText
										tagName="h3"
										value={slide.title}
										onChange={(value) => updateSlide(index, "title", value)}
										placeholder={__("Title", "text-domain")}
										className="text-lg font-bold"
										style={{ color: textColor }}
									/>
								</div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

import { __ } from "@wordpress/i18n";
import "./editor.scss";

import {
	useBlockProps,
	getColorClassName,
	PanelColorSettings,
	RichText,
	// MediaUpload,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette } from "@wordpress/components";
import { useSetting } from "@wordpress/block-editor";
import { useEffect } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

export default function Edit({ attributes, setAttributes }) {
	const {
		slides,
		autoplay,
		titleColor,
		categoryColor,
		reviewsColor,
		backgroundColor,
	} = attributes;

	// Funzione per ottenere lo slug da un valore esadecimale
	const getSlugFromColor = (color) => {
		if (!color) return "";
		const found = themeColors?.find(
			(c) => c.color.toLowerCase() === color.toLowerCase(),
		);
		return found?.slug || "";
	};

	// Funzione per ottenere il colore esadecimale dallo slug
	const getColorFromSlug = (slug) => {
		if (!slug) return "";
		const found = themeColors?.find((c) => c.slug === slug);
		return found?.color || "";
	};

	const blockProps = useBlockProps();
	const backgroundColorClass = getColorClassName(
		"background-color",
		backgroundColor,
	);
	const titleColorClass = getColorClassName("color", titleColor);
	const categoryColorClass = getColorClassName("color", categoryColor);
	const reviewsColorClass = getColorClassName("color", reviewsColor);
	const themeColors = useSetting("color.palette");

	useEffect(() => {
		console.log(backgroundColorClass);
		console.log(titleColorClass);
		console.log(categoryColorClass);
		console.log(reviewsColorClass);
	}, [
		backgroundColorClass,
		titleColorClass,
		categoryColorClass,
		reviewsColorClass,
	]);
	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelColorSettings
					title="Background"
					colorSettings={[
						{
							value: getColorFromSlug(backgroundColor),
							onChange: (color) => {
								const slug = getSlugFromColor(color);
								setAttributes({ backgroundColor: slug });
							},
							label: "Background",
							colors: themeColors,
							clearable: true, //  Aggiunge il pulsante "Rimuovi colore"
							onClear: () => {
								setAttributes({ backgroundColor: "" });
							},
						},
					]}
				/>
				<PanelColorSettings
					title="Title Color"
					colorSettings={[
						{
							value: getColorFromSlug(titleColor),
							onChange: (color) => {
								const slug = getSlugFromColor(color);
								setAttributes({ titleColor: slug });
							},
							label: "Title Color",
							colors: themeColors,
							clearable: true,
							onClear: () => {
								setAttributes({ titleColor: "" });
							},
						},
					]}
				/>
				<PanelColorSettings
					title="Category Color"
					colorSettings={[
						{
							value: getColorFromSlug(categoryColor),
							onChange: (color) => {
								const slug = getSlugFromColor(color);
								setAttributes({ categoryColor: slug });
							},
							label: "Category Color",
							colors: themeColors,
							clearable: true,
							onClear: () => {
								setAttributes({ categoryColor: "" });
							},
						},
					]}
				/>
				<PanelColorSettings
					title="Reviews Color"
					colorSettings={[
						{
							value: getColorFromSlug(reviewsColor),
							onChange: (color) => {
								const slug = getSlugFromColor(color);
								setAttributes({ reviewsColor: slug });
							},
							label: "Reviews Color",
							colors: themeColors,
							clearable: true,
							onClear: () => {
								setAttributes({ reviewsColor: "" });
							},
						},
					]}
				/>
			</InspectorControls>
			<div className={backgroundColorClass}>
				<h2>lnqwklnn</h2>
				<h2>lnqwklnn</h2>
				<h2>lnqwklnn</h2>
				<h2>lnqwklnn</h2>
				<h2>lnqwklnn</h2>
				<h2>lnqwklnn</h2>
				<h2>lnqwklnn</h2>
				<h2>lnqwklnn</h2>
				<h2>lnqwklnn</h2>
			</div>
		</div>
	);
}

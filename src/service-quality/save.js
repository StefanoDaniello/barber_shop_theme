/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const {
		sectionTitle,
		sectionDescription,
		sectionTitleColor,
		sectionDescriptionColor,
		circleColor,
		items,
	} = attributes;

	// Usa valori di fallback nel caso in cui un attributo sia undefined
	const titleColor = sectionTitleColor || "#000000"; // Colore di default per il titolo
	const descriptionColor = sectionDescriptionColor || "#969696"; // Colore di default per la descrizione
	const circleBgColor = circleColor || "#f7f7f7"; // Colore di default per il cerchio

	return (
		<div {...useBlockProps.save()}>
			<div className="bg-white text-black py-12 px-4">
				{/* Sezione titolo e descrizione */}
				<div className="text-center mb-10">
					<p style={{ color: descriptionColor }} className="uppercase">
						{sectionDescription}
					</p>
					<div className="max-w-3xl flex justify-center mx-auto mt-2">
						<h2 style={{ color: titleColor }} className="text-5xl font-bold">
							{sectionTitle}
						</h2>
					</div>
				</div>

				{/* Griglia di colonne */}
				<div className="flex flex-wrap justify-center align-center gap-8 max-w-7xl mx-auto">
					{items.map((item, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center gap-4"
						>
							<div className="relative p-10 w-80 h-auto">
								<figure className="w-full h-full relative z-10">
									{/* Aggiungi l'immagine se disponibile */}
									{item.image && (
										<img
											src={item.image}
											alt={`Image ${index + 1}`}
											className="w-full h-full object-contain z-10 "
										/>
									)}
								</figure>
								<div
									className={`absolute ${
										index == 1 ? "top-5" : "bottom-5"
									} left-1/3 z-0`}
								>
									<span
										className="w-50 h-50 rounded-full block"
										style={{ backgroundColor: circleBgColor }}
									></span>
								</div>
							</div>
							<h3
								className="text-lg font-semibold"
								style={{ color: titleColor }}
							>
								{item.title}
							</h3>
							<p
								className="text-sm max-w-xs"
								style={{ color: descriptionColor }}
							>
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

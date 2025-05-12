/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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
	MediaUpload,
	RichText,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { PanelBody, ColorPalette } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	const {
		sectionTitle,
		sectionDescription,
		circleColor,
		items,
		sectionTitleColor,
		sectionDescriptionColor,
	} = attributes;

	// Funzione per aggiornare i valori nelle colonne dinamicamente
	const updateItem = ( index, key, value ) => {
		const newItems = [ ...items ];
		newItems[ index ][ key ] = value;
		setAttributes( { items: newItems } );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody
					title={ __( 'Colore Cerchio', 'textdomain' ) }
					initialOpen={ true }
				>
					<div>
						<label>{ __( 'Colore Cerchio', 'textdomain' ) }</label>
						<ColorPalette
							value={ circleColor }
							onChange={ ( value ) =>
								setAttributes( { circleColor: value } )
							}
						/>
					</div>
				</PanelBody>
				<PanelColorSettings
					title="Colori dei testi"
					initialOpen={ true }
					colorSettings={ [
						{
							value: sectionTitleColor,
							onChange: ( color ) =>
								setAttributes( { sectionTitleColor: color } ),
							label: 'Colore titolo',
						},
						{
							value: sectionDescriptionColor,
							onChange: ( color ) =>
								setAttributes( {
									sectionDescriptionColor: color,
								} ),
							label: 'Colore descrizione',
						},
					] }
				/>
			</InspectorControls>
			<div className="bg-white text-black py-12 px-4">
				{ /* Sezione titolo e descrizione */ }
				<div className="text-center mb-10">
					<RichText
						tagName="p"
						value={ sectionDescription }
						onChange={ ( value ) =>
							setAttributes( { sectionTitle: value } )
						}
						placeholder="Enter section description"
						style={ { color: sectionDescriptionColor } }
						className="uppercase"
					/>
					<div className="max-w-3xl flex justify-center mx-auto mt-2">
						<RichText
							tagName="h2"
							value={ sectionTitle }
							onChange={ ( value ) =>
								setAttributes( { sectionDescription: value } )
							}
							placeholder="Enter section title"
							style={ { color: sectionTitleColor } }
							className="text-5xl font-bold"
						/>
					</div>
				</div>

				{ /* Griglia di colonne */ }
				<div className="flex justify-center flex-wrap align-center gap-8 max-w-7xl mx-auto ">
					{ items.map( ( item, index ) => (
						<div
							key={ index }
							className="flex flex-col items-center text-center gap-4"
						>
							<div className="relative p-10 w-80 h-80">
								<figure className="w-full h-full relative z-10">
									{ item.image ? (
										<MediaUpload
											onSelect={ ( media ) =>
												updateItem(
													index,
													'image',
													media.url
												)
											}
											allowedTypes={ [ 'image' ] }
											value={ item.image }
											render={ ( { open } ) => (
												<div
													onClick={ open }
													style={ {
														cursor: 'pointer',
														display: 'inline-block',
													} }
												>
													<img
														src={ item.image }
														alt={ `Image ${
															index + 1
														}` }
														className="w-full h-full object-cover z-10 cursor-pointer"
														title="Clicca per cambiare immagine"
													/>
												</div>
											) }
										/>
									) : (
										<div className="flex justify-center items-center w-full h-full">
											<MediaUpload
												onSelect={ ( media ) =>
													updateItem(
														index,
														'image',
														media.url
													)
												}
												allowedTypes={ [ 'image' ] }
												render={ ( { open } ) => (
													<Button
														onClick={ open }
														variant="secondary"
														className=""
													>
														Choose Image
													</Button>
												) }
											/>
										</div>
									) }
								</figure>
								<div
									className={ `absolute ${
										index == 1 ? 'top-5' : 'bottom-5'
									} left-1/3 z-0` }
								>
									<span
										className={ `w-50 h-50 rounded-full block` }
										style={ {
											backgroundColor:
												circleColor || '#f7f7f7',
										} }
									></span>
								</div>
							</div>
							<RichText
								tagName="h3"
								value={ item.title }
								onChange={ ( value ) =>
									updateItem( index, 'title', value )
								}
								placeholder={ `Enter title ${ index + 1 }` }
								style={ { color: sectionTitleColor } }
								className="text-lg font-semibold"
							/>
							<RichText
								tagName="p"
								value={ item.text }
								onChange={ ( value ) =>
									updateItem( index, 'text', value )
								}
								placeholder={ `Enter description ${
									index + 1
								}` }
								style={ { color: sectionDescriptionColor } }
								className="text-sm  max-w-xs"
							/>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
}

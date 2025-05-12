import { __ } from '@wordpress/i18n';
import './editor.scss';

import {
	useBlockProps,
	getColorClassName,
	PanelColorSettings,
	RichText,
	InspectorControls,
	useSetting,
} from '@wordpress/block-editor';
import { PanelBody, Button, ToggleControl } from '@wordpress/components';
import { useRef, useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Edit( { attributes, setAttributes } ) {
	const {
		slides,
		autoplay,
		titleColor,
		title,
		categoryColor,
		category,
		reviewsColor,
		backgroundColor,
	} = attributes;

	const swiperRef = useRef( null );
	const [ prevSlideCount, setPrevSlideCount ] = useState( slides.length );

	const blockProps = useBlockProps();
	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);
	const titleColorClass = getColorClassName( 'color', titleColor );
	const categoryColorClass = getColorClassName( 'color', categoryColor );
	const reviewsColorClass = getColorClassName( 'color', reviewsColor );
	const themeColors = useSetting( 'color.palette' );

	// Funzione per ottenere lo slug da un valore esadecimale
	const getSlugFromColor = ( color ) => {
		if ( ! color ) return '';
		const found = themeColors?.find(
			( c ) => c.color.toLowerCase() === color.toLowerCase()
		);
		return found?.slug || '';
	};

	// Funzione per ottenere il colore esadecimale dallo slug
	const getColorFromSlug = ( slug ) => {
		if ( ! slug ) return '';
		const found = themeColors?.find( ( c ) => c.slug === slug );
		return found?.color || '';
	};

	// Funzione per aggiornare i dettagli di ogni slide
	const updateSlide = ( index, field, value ) => {
		const newSlides = [ ...slides ];
		newSlides[ index ][ field ] = value;
		setAttributes( { slides: newSlides } );
	};

	// Funzione per aggiungere una nuova slide
	const addSlide = () => {
		const newSlides = [ ...slides, { review: '', name: '', category: '' } ];
		setAttributes( { slides: newSlides } );
	};

	useEffect( () => {
		if ( slides.length > prevSlideCount ) {
			swiperRef.current?.swiper?.slideTo( slides.length - 1 );
		}
		setPrevSlideCount( slides.length );
	}, [ slides.length ] );

	// Funzione per rimuovere slide
	const removeSlide = () => {
		const newSlides = [ ...slides ];
		newSlides.pop();
		setAttributes( { slides: newSlides } );
	};

	if ( ! slides.length ) {
		addSlide();
	}

	useEffect( () => {
		console.log( backgroundColorClass );
	}, [ categoryColorClass ] );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody>
					<p>Autoplay</p>
					<ToggleControl
						label="Autoplay"
						checked={ autoplay }
						onChange={ ( value ) =>
							setAttributes( { autoplay: value } )
						}
					/>
				</PanelBody>
				<PanelColorSettings
					title="Background"
					colorSettings={ [
						{
							value: getColorFromSlug( backgroundColor ),
							onChange: ( color ) => {
								const slug = getSlugFromColor( color );
								setAttributes( { backgroundColor: slug } );
							},
							label: 'Background',
							colors: themeColors,
							clearable: true, //  Aggiunge il pulsante "Rimuovi colore"
							onClear: () => {
								setAttributes( { backgroundColor: '' } );
							},
						},
					] }
				/>
				<PanelColorSettings
					title="Title Color"
					colorSettings={ [
						{
							value: getColorFromSlug( titleColor ),
							onChange: ( color ) => {
								const slug = getSlugFromColor( color );
								setAttributes( { titleColor: slug } );
							},
							label: 'Title Color',
							colors: themeColors,
							clearable: true,
							onClear: () => {
								setAttributes( { titleColor: '' } );
							},
						},
					] }
				/>
				<PanelColorSettings
					title="Category Color"
					colorSettings={ [
						{
							value: getColorFromSlug( categoryColor ),
							onChange: ( color ) => {
								const slug = getSlugFromColor( color );
								setAttributes( { categoryColor: slug } );
							},
							label: 'Category Color',
							colors: themeColors,
							clearable: true,
							onClear: () => {
								setAttributes( { categoryColor: '' } );
							},
						},
					] }
				/>
				<PanelColorSettings
					title="Reviews Color"
					colorSettings={ [
						{
							value: getColorFromSlug( reviewsColor ),
							onChange: ( color ) => {
								const slug = getSlugFromColor( color );
								setAttributes( { reviewsColor: slug } );
							},
							label: 'Reviews Color',
							colors: themeColors,
							clearable: true,
							onClear: () => {
								setAttributes( { reviewsColor: '' } );
							},
						},
					] }
				/>
			</InspectorControls>
			<div className={ backgroundColorClass }>
				<div className="container flex justify-between mx-auto items-center min-h-20 px-20">
					<Button
						onClick={ removeSlide }
						isPrimary
						className="!bg-red-500"
						disabled={ slides.length == 1 || ! slides.length }
					>
						{ __( 'remove Slide', 'text-domain' ) }
					</Button>
					<Button
						onClick={ addSlide }
						isPrimary
						disabled={ slides.length == 5 }
					>
						{ __( 'Add Slide', 'text-domain' ) }
					</Button>
				</div>
				<div className="container mx-auto text-center">
					<RichText
						tagName="p"
						value={ category }
						onChange={ ( value ) =>
							setAttributes( { category: value } )
						}
						className={ `${ categoryColorClass } text-sm mb-3 ` }
						placeholder="Categoria"
					/>
					<RichText
						tagName="h2"
						value={ title }
						onChange={ ( value ) =>
							setAttributes( { title: value } )
						}
						className={ `${ titleColorClass } text-5xl` }
						placeholder="Titolo"
					/>
				</div>

				<Swiper
					ref={ swiperRef }
					modules={ [ Navigation, Pagination, Autoplay ] }
					spaceBetween={ 0 }
					pagination={ { clickable: true } }
					slidesPerView={ 1 }
					autoplay={ false }
					loop={ false }
					allowTouchMove={ true }
					className="overflow-x-hidden swiper-client-reviews"
				>
					{ slides.map( ( slide, index ) => (
						<SwiperSlide
							key={ index }
							className="text-center mb-14"
						>
							<div className="w-4/5 mx-auto text-center my-8">
								<RichText
									tagName="p"
									value={ slide.review }
									onChange={ ( value ) =>
										updateSlide( index, 'reviews', value )
									}
									className={ `${ reviewsColorClass } text-2xl` }
									placeholder="Recensione"
								/>
							</div>
							<RichText
								tagName="h3"
								value={ slide.name }
								onChange={ ( value ) =>
									updateSlide( index, 'name', value )
								}
								className={ `${ titleColorClass } text-2xl mb-3` }
								placeholder="Nome"
							/>
							<RichText
								tagName="p"
								value={ slide.category }
								onChange={ ( value ) =>
									updateSlide( index, 'category', value )
								}
								className={ `${ categoryColorClass } text-sm ` }
								placeholder="Categoria"
							/>
						</SwiperSlide>
					) ) }
				</Swiper>
			</div>
		</div>
	);
}

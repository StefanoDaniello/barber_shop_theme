<?php

/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package barber_shop_theme
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */
function barber_shop_theme_styles()
{
	wp_enqueue_style(
		'barber_shop_theme-style',
		get_stylesheet_uri(),
		[],
		wp_get_theme()->get('Version')
	);
}
add_action('wp_enqueue_scripts', 'barber_shop_theme_styles');


// Funzione per caricare Tailwind CSS nel frontend e nell'editor
function tailwind_setup()
{
	// Per il frontend
	wp_enqueue_style('tailwind-style', get_template_directory_uri() . '/assets/css/output.css');

	// Per l'editor di WordPress
	if (is_admin()) {
		add_editor_style(get_parent_theme_file_uri('/assets/css/output.css'));
	}
}
// Frontend
add_action('wp_enqueue_scripts', 'tailwind_setup');
// Backend
add_action('admin_init', 'tailwind_setup');



function swiper_setup()
{
	wp_enqueue_style('swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css');
	wp_enqueue_script('swiper-script', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'swiper_setup');




// Regiistro i pattern category
function my_custom_block_pattern_category()
{
	register_block_pattern_category(
		'barber_shop_theme-hero',
		array(
			'label' => __('Hero', 'textdomain'),
		)
	);
	register_block_pattern_category(
		'barber_shop_theme-sponsor',
		array(
			'label' => __('Sponsor', 'textdomain'),
		)
	);
	register_block_pattern_category(
		'barber_shop_theme-columns',
		array(
			'label' => __('Columns', 'textdomain'),
		)
	);
}

add_action('init', 'my_custom_block_pattern_category');


// Regiistro i pattern 
function register_patterns()
{

	register_block_pattern(
		'barber_shop_theme/hero',
		array(
			'title'       => __('Hero', 'textdomain'),
			'categories'  => array('barber_shop_theme-hero'),
			'content'     => file_get_contents(get_template_directory() . '/patterns/hero.php'),
		)
	);
	register_block_pattern(
		'barber_shop_theme/sponsor',
		array(
			'title'       => __('sponsor', 'textdomain'),
			'categories'  => array('barber_shop_theme-sponsor'),
			'content'     => file_get_contents(get_template_directory() . '/patterns/sponsor.php'),
		)
	);
	register_block_pattern(
		'barber_shop_theme/barber-since',
		array(
			'title'       => __('barber-since', 'textdomain'),
			'categories'  => array('barber_shop_theme-columns'),
			'content'     => file_get_contents(get_template_directory() . '/patterns/barber-since.php'),
		)
	);
	register_block_pattern(
		'barber_shop_theme/pricing-plans',
		array(
			'title'       => __('pricing-plans', 'textdomain'),
			'categories'  => array('barber_shop_theme-columns'),
			'content'     => file_get_contents(get_template_directory() . '/patterns/pricing-plans.php'),
		)
	);
}
add_action('init', 'register_patterns');



// registrazione block custom

function myblocks_block_init()
{
	register_block_type(__DIR__ . '/build/service-quality');
	register_block_type(__DIR__ . '/build/card-carusel');
	register_block_type(__DIR__ . '/build/client-reviews');
	register_block_type(__DIR__ . '/build/myhero');
}
add_action('init', 'myblocks_block_init');


// Funzione per registrare il blocco
function myblocks_register_card_carusel_block()
{
	// Registra il blocco
	register_block_type(
		__DIR__ . '/card-carusel', // Percorso della cartella del blocco
		[
			'render_callback' => 'myblocks_render_card_carusel', // Callback di rendering
			'script' => 'myblocks-card-carusel-view', // JS per Swiper (frontend)
		]
	);
}
add_action('init', 'myblocks_register_card_carusel_block');






// // Funzione per caricare JS e CSS di Swiper
// function myblocks_enqueue_scripts()
// {
// 	// Registra il file JS per Swiper
// 	wp_register_script(
// 		'myblocks-card-carusel-view',
// 		plugin_dir_url(__FILE__) . 'card-carusel/view.js', // Path del JS
// 		['swiper'], // Dipendenza da Swiper (assicurati che Swiper sia già caricato)
// 		'1.0.0',
// 		true // Carica nel footer
// 	);

// 	// Registra i file CSS di Swiper
// 	wp_register_style(
// 		'myblocks-card-carusel-style',
// 		'https://unpkg.com/swiper/swiper-bundle.min.css' // URL di Swiper CSS
// 	);

// 	// Carica i CSS e JS nel frontend
// 	wp_enqueue_script('myblocks-card-carusel-view');
// 	wp_enqueue_style('myblocks-card-carusel-style');
// }
// add_action('wp_enqueue_scripts', 'myblocks_enqueue_scripts');

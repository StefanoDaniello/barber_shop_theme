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
}
add_action('init', 'register_patterns');

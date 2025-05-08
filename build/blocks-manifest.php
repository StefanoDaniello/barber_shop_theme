<?php
// This file is generated. Do not modify it manually.
return array(
	'service-quality' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'myblocks/service-quality',
		'version' => '0.1.0',
		'title' => 'Service Quality',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'GET TO KNOW OUR BARBERSHOP.'
			),
			'sectionDescription' => array(
				'type' => 'string',
				'default' => 'WHY CHOOSE US'
			),
			'sectionTitleColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'sectionDescriptionColor' => array(
				'type' => 'string',
				'default' => '#969696'
			),
			'circleColor' => array(
				'type' => 'string',
				'default' => '#f7f7f7'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'PREMIUM SERVICE',
						'text' => 'We’ll have you ready to take on that Monday...',
						'image' => 'http://localhost:10003/wp-content/uploads/2025/05/img-8-1-1.png'
					),
					array(
						'title' => 'QUALITY EXPERIENCE',
						'text' => 'Our experts provide top-tier care for your needs.',
						'image' => 'http://localhost:10003/wp-content/uploads/2025/05/img-9-1.png'
					),
					array(
						'title' => 'EXCEPTIONAL TEAM',
						'text' => 'A skilled and friendly team awaits you.',
						'image' => 'http://localhost:10003/wp-content/uploads/2025/05/img-10-1.png'
					)
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'service-quality',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);

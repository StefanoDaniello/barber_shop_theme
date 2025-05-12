<?php

$slides = $attributes['slides'] ?? [];
$autoplay =  $attributes['autoplay'] ?? true;
$titleColor = esc_attr($attributes['titleColor'] ?? 'contrast');
$title = esc_attr($attributes['title'] ?? '');
$categoryColor = esc_attr($attributes['categoryColor'] ?? 'medium-gray');
$category =  esc_attr($attributes['category'] ?? '');
$reviewsColor = esc_attr($attributes['reviewColor'] ?? 'contrast');
$backgroundColor = esc_attr($attributes['backgroundColor'] ?? 'dark-gray');

$titleColorClass = "has-{$titleColor}-color";
$categoryColorClass = "has-{$categoryColor}-color";
$reviewsColorClass = "has-{$reviewsColor}-color";
$backgroundColorClass = "has-{$backgroundColor}-background-color";

?>
<div class="<?php echo esc_attr($backgroundColorClass); ?>">
	<div class="container mx-auto text-center">
		<?php if ($category): ?>
			<p class="<?php echo esc_attr($categoryColorClass); ?> text-sm mb-3"><?php echo esc_html($category); ?></p>
		<?php endif; ?>
		<?php if ($title): ?>
			<h2 class="<?php echo esc_attr($titleColorClass); ?> text-5xl"><?php echo esc_html($title); ?></h2>
		<?php endif; ?>
	</div>

	<div class="swiper swiper-client-reviews overflow-x-hidden"
		data-autoplay="<?php echo esc_attr($autoplay ? true : false); ?>">
		<div class="swiper-wrapper">
			<?php foreach ($slides as $slide): ?>
				<div class="swiper-slide text-center mb-14">
					<div class="w-4/5 mx-auto text-center my-8">
						<?php if (!empty($slide['review'])): ?>
							<p class="<?php echo esc_attr($reviewsColorClass); ?> text-2xl"><?php echo esc_html($slide['review']); ?></p>
						<?php endif; ?>
					</div>
					<?php if (!empty($slide['name'])): ?>
						<h3 class="<?php echo esc_attr($titleColorClass); ?> text-2xl mb-3"><?php echo esc_html($slide['name']); ?></h3>
					<?php endif; ?>
					<?php if (!empty($slide['category'])): ?>
						<p class="<?php echo esc_attr($categoryColorClass); ?> text-sm"><?php echo esc_html($slide['category']); ?></p>
					<?php endif; ?>
				</div>
			<?php endforeach; ?>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</div>
<?php

// Carica Swiper CSS e JS da CDN
wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css');
wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', [], null, true);

$slides = $attributes['slides'] ?? [];
$overlay = esc_attr($attributes['overlayColor'] ?? '#000000');
$titleColor = esc_attr($attributes['titleColor'] ?? '#ffffff'); // Aggiungi questa riga
$categoryColor = esc_attr($attributes['categoryColor'] ?? '#969696'); // Aggiungi questa rigacategoryColor

?>

<div class="wp-block-myblocks-card-carusel swiper">
    <div class="bg-white">
        <div class="swiper overflow-x-hidden">
            <div class="swiper-wrapper">
                <?php foreach ($slides as $slide) : ?>
                    <div class="swiper-slide !h-[512px] relative">
                        <?php if (! empty($slide['imageUrl'])) : ?>
                            <div class="w-full h-full">
                                <img src="<?php echo esc_url($slide['imageUrl']); ?>" alt="<?php echo esc_attr($slide['title'] ?? ''); ?>" class="w-full h-full object-cover" />
                                <?php if (! empty($slide['category']) || ! empty($slide['title'])) : ?>
                                    <div class="absolute bottom-1/12 right-0 p-6 px-8 w-10/12" style="background-color: <?php echo $overlay; ?>; z-index: 10;">
                                        <?php if (! empty($slide['category'])) : ?>
                                            <p class="text-sm mb-1" style="color: <?php echo $categoryColor; ?>;"><?php echo esc_html($slide['category']); ?></p>
                                        <?php endif; ?>
                                        <?php if (! empty($slide['title'])) : ?>
                                            <h3 class="text-2xl font-bold" style="color: <?php echo $titleColor; ?>;"><?php echo esc_html($slide['title']); ?></h3>
                                        <?php endif; ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof Swiper !== "undefined") {
            new Swiper('.wp-block-myblocks-card-carusel .swiper', {
                loop: false,
                centeredSlides: false,
                spaceBetween: 0,
                allowTouchMove: true,
                slidesPerView: 4,

                breakpoints: {
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
                },
            });
        } else {
            console.warn("Swiper non è stato caricato.");
        }
    });
</script>
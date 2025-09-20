<?php
/**
 * Title: Swiper pattern
 * Slug: blocks/swiper-pattern
 * Categories: custom-blocks
 */
?>
<!-- wp:sections/mask-section {"style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"}}}} -->
<section style="padding-top:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50)"
    class="wp-block-sections-mask-section">
    <!-- wp:group {"tagName":"header","layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
    <header class="wp-block-group"><!-- wp:paragraph {"className":"is-style-text-display"} -->
        <p class="is-style-text-display">Nasz asortyment</p>
        <!-- /wp:paragraph -->

        <!-- wp:heading {"textAlign":"center"} -->
        <h2 class="wp-block-heading has-text-align-center">Asortyment roślin – szeroki wybór dla profesjonalistów</h2>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"align":"center"} -->
        <p class="has-text-align-center">Oferujemy sadzonki w doniczkach P9 i multiplatach MP60/126/144 – dostępne
            wyłącznie na zamówienie. a także w pojemnikach P9, C1-C5 i materiał kopany z gruntu</p>
        <!-- /wp:paragraph -->
    </header>
    <!-- /wp:group -->

    <!-- wp:atoms/swiper -->
    <div class="wp-block-atoms-swiper">
        <div class="swiper swiper-container">
            <div class="swiper-wrapper"><!-- wp:image {"id":149,"sizeSlug":"large","linkDestination":"none"} -->
                <figure class="wp-block-image size-large">
                    <img
                        src="<?php echo esc_url( get_theme_file_uri( 'assets/images/swiper-image-1.webp') ); ?>"
                        alt="" class="wp-image-149" />
                </figure>
                <!-- /wp:image -->

                <!-- wp:image {"id":95,"sizeSlug":"large","linkDestination":"none"} -->
                <figure class="wp-block-image size-large"><img
                        src="<?php echo esc_url( get_theme_file_uri( 'assets/images/swiper-image-2.webp') ); ?>"
                        alt=""
                        class="wp-image-95" /></figure>
                <!-- /wp:image -->

                <!-- wp:image {"id":47,"sizeSlug":"full","linkDestination":"none"} -->
                <figure class="wp-block-image size-full"><img
                        src="<?php echo esc_url( get_theme_file_uri( 'assets/images/swiper-image-3.webp') ); ?>"
                        alt="" class="wp-image-47" /></figure>
                <!-- /wp:image -->

                <!-- wp:image {"id":95,"sizeSlug":"large","linkDestination":"none"} -->
                <figure class="wp-block-image size-large"><img
                        src="<?php echo esc_url( get_theme_file_uri( 'assets/images/swiper-image-4.webp') ); ?>"
                        alt="" class="wp-image-95" /></figure>
                <!-- /wp:image -->

                <!-- wp:image {"id":69,"scale":"cover","sizeSlug":"full","linkDestination":"none"} -->
                <figure class="wp-block-image size-full"><img
                        src="<?php echo esc_url( get_theme_file_uri( 'assets/images/swiper-image-5.webp') ); ?>" alt=""
                        class="wp-image-69" style="object-fit:cover" /></figure>
                <!-- /wp:image -->

                <!-- wp:image {"id":69,"scale":"cover","sizeSlug":"full","linkDestination":"none"} -->
                <figure class="wp-block-image size-full"><img
                        src="<?php echo esc_url( get_theme_file_uri( 'assets/images/swiper-image-6.webp') ); ?>" alt=""
                        class="wp-image-69" style="object-fit:cover" /></figure>
                <!-- /wp:image -->

                <!-- wp:image {"id":69,"scale":"cover","sizeSlug":"full","linkDestination":"none"} -->
                <figure class="wp-block-image size-full"><img
                        src="<?php echo esc_url( get_theme_file_uri( 'assets/images/swiper-image-7.webp') ); ?>" alt=""
                        class="wp-image-69" style="object-fit:cover" /></figure>
                <!-- /wp:image -->
            </div>
        </div>
    </div>
    <!-- /wp:atoms/swiper -->

    <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
    <div class="wp-block-buttons"><!-- wp:button {"textAlign":"center","className":"is-style-fill button-white"} -->
        <div class="wp-block-button is-style-fill button-white"><a
                class="wp-block-button__link has-text-align-center wp-element-button" href="/oferta">Pełna
                oferta roślin</a></div>
        <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
</section>
<!-- /wp:sections/mask-section -->
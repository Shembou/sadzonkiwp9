<section <?php echo get_block_wrapper_attributes(); ?>>
    <div class="wrapper">
          <?php echo $content ?>
    <?php
    $current_post_id = get_the_ID();

    $categories = wp_get_post_categories($current_post_id);

    if (!function_exists('parse_blog_html')) {
        function parse_blog_html($content) {
            if (empty($content)) {
                return 1; // default 1 minute if no content
            }

            // Strip HTML and count words
            $word_count = str_word_count( wp_strip_all_tags( $content ) );

            // Average reading speed ~200 words/minute
            $reading_time = ceil($word_count / 200);

            return $reading_time;
        }
    }

    $args = [
        'post_type'      => 'post',
        'posts_per_page' => 2,
        'post__not_in'   => [$current_post_id],
        'category__in'   => $categories,
        'orderby'        => 'date',
        'order'          => 'DESC',
    ];

    $query = new WP_Query($args);

    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();
            $post_thumbnail   = get_the_post_thumbnail(get_the_ID(), 'medium');
            $post_title       = get_the_title();
            $post_excerpt     = get_the_excerpt();
            $post_link        = get_permalink();
            $post_categories  = get_the_category();
            $content          = get_the_content();
            $reading_time     = parse_blog_html($content);
            ?>
            <div class="blog-post">
                <div class="image-wrapper">
                    <?php echo $post_thumbnail; ?>
                    <div>
                        <div class="categories">
                            <?php
                            if ( ! empty( $post_categories ) ) {
                                foreach ( $post_categories as $cat ) {
                                    echo '<span>' . esc_html( $cat->name ) . '</span>';
                                }
                            }
                            ?>
                        </div>
                        <p class="reading-time">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_6574_5877)">
                                <path d="M3.33301 12.543C3.33301 13.7249 3.5658 14.8952 4.01809 15.9871C4.47038 17.079 5.13332 18.0712 5.96905 18.9069C6.80477 19.7427 7.79693 20.4056 8.88886 20.8579C9.98079 21.3102 11.1511 21.543 12.333 21.543C13.5149 21.543 14.6852 21.3102 15.7772 20.8579C16.8691 20.4056 17.8612 19.7427 18.697 18.9069C19.5327 18.0712 20.1956 17.079 20.6479 15.9871C21.1002 14.8952 21.333 13.7249 21.333 12.543C21.333 10.156 20.3848 7.86684 18.697 6.17901C17.0091 4.49118 14.72 3.54297 12.333 3.54297C9.94606 3.54297 7.65687 4.49118 5.96905 6.17901C4.28122 7.86684 3.33301 10.156 3.33301 12.543Z" stroke="#373737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.333 7.54297V12.543L15.333 15.543" stroke="#373737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_6574_5877">
                                <rect width="24" height="24" fill="white" transform="translate(0.333008 0.542969)"/>
                                </clipPath>
                            </defs>
                            </svg>
                            <span><?php echo esc_html($reading_time); ?> min. czytania </span>
                        </p>
                    </div>
                </div>
                <div class="blog-contents-wrapper">
                    <h2><?php echo esc_html($post_title); ?></h2>
                    <p><?php echo esc_html($post_excerpt); ?></p>
                    <a href="<?php echo esc_url($post_link); ?>" class="wp-block-button__link">
                        Czytaj artykuł
                    </a>
                </div>
            </div>
        <?php
        endwhile;
        wp_reset_postdata();
    else :
        ?>
        <p>No related articles found.</p>
    <?php endif; ?>
    </div>
</section>

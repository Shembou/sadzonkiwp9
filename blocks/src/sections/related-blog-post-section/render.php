<section>
    <header <?php echo get_block_wrapper_attributes(); ?> >
        <?php echo $content ?>
    </header>

    <?php
    $current_post_id = get_the_ID();
    $current_post_slug = get_post_field('post_name', $current_post_id);

    if (!function_exists('parse_blog_html')) {
        function parse_blog_html($content) {
            if (empty($content)) {
                return [
                    'reading_time'   => 0,
                    'featured_image' => '',
                    'title'          => '',
                ];
            }

            // Load content into DOMDocument
            $dom = new DOMDocument();
            @$dom->loadHTML(
                mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'),
                LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD
            );

            // Create xpath object
            $xpath = new DOMXPath($dom);

            // Extract reading time
            $reading_time_node = $xpath->query("//span[contains(@class, 'reading-time')]")->item(0);
            $reading_time_text = $reading_time_node ? $reading_time_node->textContent : '';
            $reading_time = (int) preg_replace('/[^0-9]/', '', $reading_time_text) ?: 1;

            // Extract featured image
            $featured_image_node = $xpath->query("//img[contains(@class, 'featured-image')]")->item(0);
            $featured_image = $featured_image_node ? $featured_image_node->getAttribute('src') : '';

            // Extract title
            $title_node = $xpath->query("//h1[contains(@class, 'wp-block-heading')]")->item(0);
            $title = $title_node ? trim($title_node->textContent) : '';

            return [
                'reading_time'   => $reading_time,
                'featured_image' => $featured_image,
                'title'          => $title,
            ];
        }
    }

    $args = [
        'post_type'      => 'post',
        'posts_per_page' => 2,
        'post__not_in'   => [$current_post_id],
        'orderby'        => 'date',
        'order'          => 'DESC',
    ];

    $query = new WP_Query($args);

    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();
            $post_link = get_permalink();
            $content = get_the_content();
            $parsed_data = parse_blog_html($content);
            ?>
            <div class="blog-post">
                <div class="image-wrapper">
                    <p class="reading-time">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none" viewBox="0 0 16 17" alt="Bookmark Icon">
                        <path fill="#324C4D" d="M13 2.344H4.5a2 2 0 0 0-2 2v10.5a.5.5 0 0 0 .5.5h9a.5.5 0 1 0 0-1H3.5a1 1 0 0 1 1-1H13a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5m-5.5 1h3v4.5l-1.2-.9a.5.5 0 0 0-.6 0l-1.2.9zm5 9h-8a2 2 0 0 0-1 .268V4.344a1 1 0 0 1 1-1h2v5.5a.5.5 0 0 0 .8.4L9 7.97l1.7 1.275a.5.5 0 0 0 .8-.4v-5.5h1z"></path>
                    </svg>
                        <?php echo esc_html($parsed_data['reading_time']); ?> min. czytania
                    </p>
                    <img src="<?php echo esc_url($parsed_data['featured_image']); ?>" alt="<?php echo esc_attr($parsed_data['title']); ?>" />
                </div>
                <div class="blog-contents-wrapper">
                    <div class="wrapper">
                        <h2><?php echo esc_html($parsed_data['title']); ?></h2>
                        <a href="<?php echo esc_url($post_link); ?>" class="custom-button">
                            <span>
                                Czytaj dalej                             
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" alt="Bookmark Icon">
                                    <path fill="#F9FDFF" d="M13 1.5H4.5a2 2 0 0 0-2 2V14a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1H3.5a1 1 0 0 1 1-1H13a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5m-5.5 1h3V7l-1.2-.9a.5.5 0 0 0-.6 0L7.5 7zm5 9h-8c-.351 0-.696.092-1 .268V3.5a1 1 0 0 1 1-1h2V8a.5.5 0 0 0 .8.4L9 7.125 10.7 8.4a.5.5 0 0 0 .8-.4V2.5h1z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        <?php
        endwhile;
        wp_reset_postdata();
    else :
        ?>
        <p>No related articles found.</p>
    <?php endif; ?>
</section>

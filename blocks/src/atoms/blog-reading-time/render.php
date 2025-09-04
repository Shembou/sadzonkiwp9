<?php
 $post_id = get_the_ID();
 $post = get_post($post_id);

if ($post) {
    $post_date = get_the_date('d.m.Y', $post);

    // Get raw post content (no filters)
    $content = $post->post_content;

    // Use regex to extract .blog-wrapper content
    $blog_text = '';
    if (preg_match('/<div[^>]*class=["\'][^"\']*blog-wrapper[^"\']*["\'][^>]*>(.*?)<\/div>/is', $content, $matches)) {
        $blog_text = strip_tags($matches[1]);
    }

    // Calculate reading time
    $clean_text = trim($blog_text);
    $word_count = str_word_count($clean_text);
    $reading_time = ceil($word_count / 200);

    $polish_variation = "minut";

    if ($reading_time == (2 || 3 || 4)) {
        $polish_variation  = "minuty";
    }

    if ($reading_time == 1) {
        $polish_variation  = "minuta";
    }

    // Output
    echo '<div class="wp-block-atoms-blog-reading-time">';
    echo '<span class="blog-date">' . esc_html($post_date) . '</span>';
    echo '<span>' . "•" . '</span>';
    echo '<span class="blog-reading-time">' . esc_html($reading_time) . " " . esc_html($polish_variation) . ' czytania</span>';
    echo '</div>';
}

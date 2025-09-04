<?php
$block_data = [];

$terms = get_the_terms(get_the_ID(), 'category');
$categories = [];

if ($terms && !is_wp_error($terms)) {
    foreach ($terms as $term) {
        $categories[] = [
            'name' => $term->name,
            'link' => get_term_link($term),
        ];
    }
}

$block_data['categories'] = $categories;

$author_id = get_the_author_meta('ID');
$block_data['author'] = [
    'name'     => get_the_author_meta('first_name', $author_id),
    'last_name'     => get_the_author_meta('last_name', $author_id),
    'nickname' => get_the_author_meta('nickname', $author_id),
    'avatar'   => get_avatar_url($author_id, ['size' => 56]),
];

echo '<div class="wp-block-components-post-info">';
    if (!empty($block_data['categories'])) {
    echo '<div class="categories">';
    foreach ($block_data['categories'] as $category) {
        echo '<a href="' . esc_url($category['link']) . '" class="pill-category">' . esc_html($category['name']) . '</a> ';
    }
    echo '</div>';
    }

    if (!empty($block_data['author'])) {
        $author = $block_data['author'];
        echo '<div class="author-info">';
            echo '<img src="' . esc_url($author['avatar']) . '" alt="' . esc_attr($author['name']) . '" class="author-avatar">';
            echo '<div class="wrapper">';
                echo '<span class="author-name">' . esc_html($author['name']) . ' ' . esc_html($author['last_name']) . '</span> ';
                echo '<span class="author-nickname">' . esc_html($author['nickname']) . '</span>';
            echo '</div>';
        echo '</div>';
    }
echo '</div>';

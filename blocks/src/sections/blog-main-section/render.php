<section class="wp-block-sections-blog-main-section">
    <div class="wrapper">
        <?php 
        $search   = sanitize_text_field($_GET['search'] ?? '');
        $selected_cats = isset( $_GET['category'] ) ? array_map( 'intval', (array) $_GET['category'] ) : [];
        $orderby  = sanitize_text_field($_GET['orderby'] ?? 'date_desc');

        $paged = max(1, get_query_var('paged') ?: ($_GET['paged'] ?? 1));

        $args = [
            'post_type'      => 'post',
            's'              => sanitize_text_field($search),
            'posts_per_page' => 5,
            'paged'          => $paged,
        ];

        switch ($orderby) {
            case 'date_asc':
                $args['orderby'] = 'date';
                $args['order']   = 'ASC';
                break;
            case 'title_asc':
                $args['orderby'] = 'title';
                $args['order']   = 'ASC';
                break;
            case 'title_desc':
                $args['orderby'] = 'title';
                $args['order']   = 'DESC';
                break;
            default:
                $args['orderby'] = 'date';
                $args['order']   = 'DESC';
                break;
        }

        if ( ! empty( $selected_cats ) ) {
            $args['category__in'] = $selected_cats;
        }

        $query = new WP_Query($args);

        if ($paged > $query->max_num_pages && $query->max_num_pages > 0) {
            $paged = 1;
            $args['paged'] = $paged;
            $query = new WP_Query($args);
        }

        if (!function_exists('parse_blog_html')) {
            function parse_blog_html($content) {
                if (empty($content)) {
                    return 1;
                }

                $word_count   = str_word_count(wp_strip_all_tags($content));
                $reading_time = ceil($word_count / 200);

                return $reading_time;
            }
        }
        ?>
        <form method="get" action="">
            <div class="filters">
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Szukaj"
                    value="<?php echo esc_attr( $search ); ?>"
                >

                <div class="categories">
                    <h2>Kategoria</h2>
                    <div class="categories-wrapper">
                        <?php
                        $all_cats = get_categories();
                        foreach ( $all_cats as $cat ) : ?>
                            <label class="checkbox-wrapper">
                                <input
                                    type="checkbox"
                                    name="category[]"
                                    value="<?php echo esc_attr( $cat->term_id ); ?>"
                                    <?php checked( in_array( $cat->term_id, $selected_cats, true ) ); ?>
                                />
                                <?php echo esc_html( $cat->name ); ?>
                            </label>
                        <?php endforeach; ?>
                    </div>
                </div>

                <input type="hidden" name="paged" id="paged-field" value="<?php echo esc_attr( $paged ); ?>">

                <button type="submit" class="wp-block-button__link f-w">Filtruj</button>
            </div>
        </form>
        <div class="main-content">
            <div class="pagination-wrapper">
                <div class="sort">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.59993 2.38034H12.3999C13.1333 2.38034 13.7333 2.98034 13.7333 3.71367V5.18034C13.7333 5.71367 13.3999 6.38034 13.0666 6.71367L10.1999 9.24701C9.79993 9.58034 9.53327 10.247 9.53327 10.7803V13.647C9.53327 14.047 9.2666 14.5803 8.93327 14.7803L7.99994 15.3803C7.13327 15.9137 5.93327 15.3137 5.93327 14.247V10.7137C5.93327 10.247 5.6666 9.64701 5.39994 9.31367L2.8666 6.64701C2.53327 6.31367 2.2666 5.71367 2.2666 5.31367V3.78034C2.2666 2.98034 2.8666 2.38034 3.59993 2.38034Z" stroke="#388E3C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.28667 2.38034L4 7.64701" stroke="#388E3C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h3>Sortuj:</h3>
                    <select name="orderby">
                        <option value="date_desc" <?php selected($_GET['orderby'] ?? '', 'date_desc'); ?>>Od najnowszych</option>
                        <option value="date_asc" <?php selected($_GET['orderby'] ?? '', 'date_asc'); ?>>Od najstarszych</option>
                        <option value="title_asc" <?php selected($_GET['orderby'] ?? '', 'title_asc'); ?>>Tytuł A–Z</option>
                        <option value="title_desc" <?php selected($_GET['orderby'] ?? '', 'title_desc'); ?>>Tytuł Z–A</option>
                    </select>
                </div>
                <div class="pagination">
                    <?php
                    echo paginate_links([
                        'total'     => $query->max_num_pages,
                        'current'   => $paged,
                        'format'    => '?paged=%#%',
                        'add_args'  => [
                            'search'   => $search,
                            'category' => $selected_cats,
                            'orderby'  => $orderby,
                        ],
                        'prev_text' => '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0596 3.70033L5.7129 8.047C5.19957 8.56033 5.19957 9.40033 5.7129 9.91366L10.0596 14.2603" stroke="#388E3C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                        'next_text' => '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.94043 14.2604L10.2871 9.9137C10.8004 9.40036 10.8004 8.56036 10.2871 8.04703L5.94043 3.70036" stroke="#388E3C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                    ]);
                    ?>
                </div>
            </div>
            <div class="blog-posts-wrapper">

            <?php if ($query->have_posts()) : ?>
                <?php while ($query->have_posts()) : $query->the_post(); 
                    $post_thumbnail  = get_the_post_thumbnail(get_the_ID(), 'post-thumbnail');
                    $post_title      = get_the_title();
                    $post_excerpt    = get_the_excerpt();
                    $post_link       = get_permalink();
                    $post_categories = get_the_category();
                    $content         = get_the_content();
                    $reading_time    = parse_blog_html($content);
                ?>
                    <div class="blog-post">
                        <div class="image-wrapper">
                            <?php echo $post_thumbnail; ?>
                            <div>
                                <div class="categories">
                                    <?php
                                    if (!empty($post_categories)) {
                                        foreach ($post_categories as $cat) {
                                            echo '<span>' . esc_html($cat->name) . '</span>';
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
                                    <span><?php echo esc_html($reading_time); ?> min. czytania</span>
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
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            <?php else : ?>
                <p>Brak wyników.</p>
            <?php endif; ?>
            </div>
            <div class="pagination center">
                <?php
                echo paginate_links([
                    'total'     => $query->max_num_pages,
                    'current'   => $paged,
                    'format'    => '?paged=%#%',
                    'add_args'  => [
                        'search'   => $search,
                        'category' => $selected_cats,
                        'orderby'  => $orderby,
                    ],
                    'prev_text' => '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0596 3.70033L5.7129 8.047C5.19957 8.56033 5.19957 9.40033 5.7129 9.91366L10.0596 14.2603" stroke="#388E3C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                    'next_text' => '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.94043 14.2604L10.2871 9.9137C10.8004 9.40036 10.8004 8.56036 10.2871 8.04703L5.94043 3.70036" stroke="#388E3C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                ]);
                ?>
            </div>
        </div>
    </div>
</section>

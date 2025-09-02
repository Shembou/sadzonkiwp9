<?php
namespace patterns;

class patterns {
    public static function register_plugin_patterns() {
        if ( ! function_exists( 'register_block_pattern' ) ) {
            error_log("The function is already defined");
            return;
        }

        $patterns_dir = plugin_dir_path( __FILE__ );
        error_log("The patterns directory is : $patterns_dir");

        if ( function_exists( 'register_block_pattern_category' ) ) {
            register_block_pattern_category(
                'plugin-patterns',
                [ 'label' => __( 'Plugin Patterns', 'blocks' ) ]
            );
        }

        foreach ( glob( $patterns_dir . '*.html' ) as $file ) {
            $slug    = basename( $file, '.html' );
            $content = file_get_contents( $file );

            if ( ! $content ) {
                error_log( "Could not load pattern file: $file" );
                continue;
            }

            register_block_pattern(
                'blocks/' . $slug,
                [
                    'title'       => __( ucfirst( str_replace( '-', ' ', $slug ) ), 'blocks' ),
                    'description' => __( ucfirst( str_replace( '-', ' ', $slug ) ) . ' pattern for this plugin', 'blocks' ),
                    'content'     => $content,
                    'categories'  => [ 'plugin-patterns' ],
                ]
            );

            error_log( "Registered pattern: blocks/$slug" );
        }
    }
}

<?php
/**
 * Plugin Name:       Sections
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sections
 *
 * @package Sections
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_blocks_on_init() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build/atoms', __DIR__ . '/build/atoms-blocks-manifest.php' );
        wp_register_block_types_from_metadata_collection( __DIR__ . '/build/components', __DIR__ . '/build/components-blocks-manifest.php' );
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build/sections', __DIR__ . '/build/sections-blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build/atoms', __DIR__ . '/build/atoms-blocks-manifest.php' );
        wp_register_block_metadata_collection( __DIR__ . '/build/components', __DIR__ . '/build/components-blocks-manifest.php' );
		wp_register_block_metadata_collection( __DIR__ . '/build/sections', __DIR__ . '/build/sections-blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$atoms_manifest_data = require __DIR__ . '/build/atoms-blocks-manifest.php';
	foreach ( array_keys( $atoms_manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/atoms/{$block_type}" );
	}

	$sections_manifest_data = require __DIR__ . '/build/sections-blocks-manifest.php';
	foreach ( array_keys( $sections_manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/sections/{$block_type}" );
	}


	$components_manifest_data = require __DIR__ . '/build/components-blocks-manifest.php';
	foreach ( array_keys( $components_manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/components/{$block_type}" );
	}
}
add_action( 'init', 'create_blocks_on_init' );

function register_external_scripts() {
    wp_register_style(
        'swiper-css',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        array(),
        '11.0.0'
    );

    wp_register_script(
        'swiper-js',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
        array(),
        '11.0.0',
        true
    );

    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'register_external_scripts' );

function enqueue_plugin_styles() {
	wp_enqueue_style(
		'plugin-styles',
		plugins_url( 'assets/styles/block-styles.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'assets/styles/block-styles.css' )
	);
}
add_action( 'wp_enqueue_scripts', 'enqueue_plugin_styles' );
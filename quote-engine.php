<?php
/**
 * Plugin Name: Product Configuration App
 * Description: A plugin that displays a product configuration app
 * Version: 1.0
 * Author: Your Name
 * License: GPL-2.0+
 * Text Domain: product-configuration-app
 */

// Prevent direct file access
defined('ABSPATH') or die('No script kiddies please!');

// Enqueue styles and scripts
function product_configuration_app_enqueue_scripts() {
    wp_enqueue_style('product-configuration-app-styles', plugin_dir_url(__FILE__) . 'css/style.css');
    //wp_enqueue_script('product-configuration-app', plugin_dir_url(__FILE__) . 'js/script.js', array('jquery'), '', true);
    wp_enqueue_script('emailjs', 'https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js', array(), null, false);
}
add_action('wp_enqueue_scripts', 'product_configuration_app_enqueue_scripts');


function engine_script_handler() {
    if (is_page('window-quote-engine')) {
        // register your script location, dependencies and version
        wp_enqueue_script('window-engine', plugin_dir_url(__FILE__) . 'js/window-engine.js', array('jquery'), '', true);
        // enqueue the script
        wp_enqueue_script('window-engine');
    }

    if (is_page('door-quote-engine')) {
        // register your script location, dependencies and version
        wp_enqueue_script('door-engine', plugin_dir_url(__FILE__) . 'js/door-engine.js', array('jquery'), '', true);
        // enqueue the script
        wp_enqueue_script('door-engine');
    }
}
add_action('wp_enqueue_scripts', 'engine_script_handler');

function product_configuration_app_shortcode_window() {
    
    include 'designers/window-quote-engine.php';
  
}
add_shortcode('window_quote_engine', 'product_configuration_app_shortcode_window');

function product_configuration_app_shortcode_door() {
    
    include 'designers/door-quote-engine.php';

}
add_shortcode('door_quote_engine', 'product_configuration_app_shortcode_door');


if (function_exists('acf_add_local_field_group')) {
    // Include ACF plugin files
    include_once( ABSPATH . 'wp-content/plugins/advanced-custom-fields-pro/acf.php' );
}

// Import ACF field group
add_filter('acf/settings/load_json', 'my_acf_json_load_point');
function my_acf_json_load_point($paths) {
    $paths[] = plugin_dir_path(__FILE__) . '/fields/window-fields.json';
    return $paths;
}

//ACF Options Page
if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page(array(
        'page_title'    => 'Quote Engine Settings',
        'menu_title'    => 'Quote Engine Settings',
        'menu_slug'     => 'quote-engine-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
    
    acf_add_options_sub_page(array(
        'page_title'    => 'Window Quote Settings',
        'menu_title'    => 'Window Quote Settings',
        'parent_slug'   => 'quote-engine-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title'    => 'Door Quote Settings',
        'menu_title'    => 'Door Quote Settings',
        'parent_slug'   => 'quote-engine-settings',
    ));

}
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
    wp_enqueue_script('product-configuration-app', plugin_dir_url(__FILE__) . 'js/script.js', array('jquery'), '', true);
    wp_enqueue_script('emailjs', 'https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js', array(), null, false);

    
}
add_action('wp_enqueue_scripts', 'product_configuration_app_enqueue_scripts');

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

}


function product_configuration_app_shortcode() {
    ob_start();
    include 'window-quote-engine.php';
    return ob_get_clean();
}
add_shortcode('window_quote_engine', 'product_configuration_app_shortcode');


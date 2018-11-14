<?php

/********************************************************/
/* Load parent theme styles
/********************************************************/
// add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

/********************************************************/
/* Load a Script from a Child Theme without Dependencies
/********************************************************/
// http://codex.wordpress.org/Function_Reference/wp_enqueue_script
// add_action( 'wp_enqueue_scripts', 'ssws_assets' );
function ssws_assets() {
	wp_enqueue_script( 'umbrella-js', get_stylesheet_directory_uri() . '/bower_components/umbrella/umbrella.min.js' );
}

/********************************************************/
/* Register and enqueue a script that does not depend on a JavaScript library.
/********************************************************/
add_action( 'wp_enqueue_scripts', 'child_add_scripts' );
function child_add_scripts() {
    wp_register_script(
        'ssws-custom-js',
        get_stylesheet_directory_uri() . '/scripts/app.js',
        false,
        '1.0',
        true
    );

    wp_enqueue_script( 'ssws-custom-js' );
}
// it requires jQuery(document) instead of $(document) or better:
// wrap your js into this function
// jQuery(document).ready(function($) {
//    //some js code within here
// });
// http://codex.wordpress.org/Function_Reference/wp_enqueue_script#jQuery_noConflict_Wrappers



/********************************************************/
// .............
/********************************************************/

<?php

/********************************************************/
/* Register and enqueue a script that does not depend on a JavaScript library.
/********************************************************/
add_action( 'wp_enqueue_scripts', 'child_add_scripts' );
function child_add_scripts() {
    wp_register_script(
        'ssws-custom-js',
        get_stylesheet_directory_uri() . '/scripts/app.min.js',
        false,
        '1.0',
        true
    );

    wp_enqueue_script( 'ssws-custom-js' );
}
// FYI in case you are writing some custom jQuery scripts:
// http://codex.wordpress.org/Function_Reference/wp_enqueue_script#jQuery_noConflict_Wrappers
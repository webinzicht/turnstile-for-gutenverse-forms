<?php
/**
 * Plugin Name: Turnstile for Gutenverse Forms
 * Description: Invisible Cloudflare Turnstile protection for all Gutenverse forms (.guten-form-builder). Automatically injects and validates tokens before submission. Add site key to js file manually.
 * Version: 1.0.0
 * Author: Mark van Laere – Web Inzicht - 2025
 * Author URI: https://www.webinzicht.nl
 * License: MIT
 *
 * @package TurnstileForGutenverseForms
 *
 */


if (!defined('ABSPATH')) exit;

/**
 * Enqueue Turnstile script + our integration script
 */
add_action('wp_enqueue_scripts', function () {

    // Load Cloudflare Turnstile (explicit mode - must NOT be cached or proxied)
    wp_enqueue_script(
        'turnstile-api',
        'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit',
        [],
        null,
        true
    );

    // Load integration JS
    wp_enqueue_script(
        'turnstile-gv-js',
        plugin_dir_url(__FILE__) . 'assets/js/turnstile-gutenverse.js',
        ['turnstile-api'],
        '1.0.0',
        true
    );

});
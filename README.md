## Turnstile for Gutenverse Forms

Invisible Cloudflare Turnstile protection for Gutenverse forms (`.guten-form-builder`).  
Automatically injects an invisible widget, executes a challenge, and delivers a valid Turnstile token before Gutenverse submits the form via AJAX.

## Installation

1. Download or clone the folder into:
   `/wp-content/plugins/turnstile-for-gutenverse-forms/`

2. Activate the plugin in **WordPress → Plugins**.

3. Edit your site key in  
   `assets/js/turnstile-gutenverse.js`:
   
```js
const TFGF_SITEKEY = "YOUR_SITE_KEY_HERE";
```

Cloudflare test keys are included (commented out) for debugging.

## Features

- Works with Gutenverse forms automatically
- Works with multiple forms per page
- No markup changes or CSS needed
- No settings page required
- Invisible widget (user never sees it)
- Preserves AJAX form validation
- Blocks bots before submission

## Requirements

- WordPress 6+
- Gutenverse plugin with Gutenverse Forms plugin
- Cloudflare Turnstile site key

## Notes
This plugin performs client-side token injection only.
 
## License

MIT License (free to modify + redistribute)

## Support

Enjoying this plugin?

If it saved you some time: 

☕ <a href="https://www.buymeacoffee.com/wizmark" rel="nofollow">
  <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-yellow" alt="Buy Me a Coffee" />
</a>

Your support makes a big difference!!

Cheers, 
Mark




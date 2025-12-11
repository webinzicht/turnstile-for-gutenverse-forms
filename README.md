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

- Works with all Gutenverse forms automatically
- No markup changes needed
- No settings page required
- Invisible widget (user never sees it)
- Challenge runs only when form is valid
- Prevents spam before Gutenverse AJAX submit

## Requirements

- WordPress 6+
- Gutenverse plugin (with guten-form-builder)
- Cloudflare Turnstile site key
 
## License

MIT License (free to modify + redistribute)

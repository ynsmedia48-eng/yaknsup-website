# Yak N Sup Website — Developer Handoff

## Overview

This is the fully designed and approved Yak N Sup website. All HTML, CSS, assets, fonts, and icons are included. The site is ready to be rebuilt in WordPress matching this design exactly.

---

## Recommended WordPress Stack

| Tool | Purpose |
|------|---------|
| **WordPress** (latest) | CMS platform |
| **GeneratePress** (free) or **Hello Theme** (free) | Lightweight base theme — do not use a heavy theme |
| **Elementor Pro** | Page builder — recreate each page using these HTML files as the exact design reference |
| **WPForms** or **Contact Form 7** | Contact and group inquiry forms |
| **FareHarbor** | Booking widget — embed on the Book page (code provided by FareHarbor) |

**Do not** use Divi, Avada, or other heavy themes. They will not match the lightweight vintage feel of this design.

---

## File Structure

```
website/
├── index.html              → Homepage
├── rentals.html            → Rentals & Pricing page
├── experiences.html        → Experiences & Events page
├── groups.html             → Group Bookings page
├── passes.html             → Season Passes page (⚠️ confirm with client before publishing)
├── book.html               → Book Now page (FareHarbor placeholder)
├── about.html              → About Us page
├── faq.html                → FAQs page
├── contact.html            → Contact page
├── gift-cards.html         → Gift Cards page (⚠️ confirm with client before publishing)
├── locations/
│   ├── canyon-lake.html    → Canyon Lake Marina location page
│   └── hidden-cove.html    → Hidden Cove page (⚠️ "Coming Soon" — not live yet)
├── shared.css              → All shared styles — import into WordPress as Custom CSS
├── icons.svg               → SVG icon sprite — must be available on all pages
├── fonts/
│   └── SundayRomantic.otf  → Display headline font (DEMO — see font note below)
└── images/
    ├── logo-blue.svg       → Primary logo (Deep Lake Blue)
    ├── logo-white.svg      → White logo (for dark backgrounds)
    ├── logo-lockup-blue.svg → Horizontal lockup with tagline
    └── *.jpg               → All photography
```

---

## WordPress Page Structure

Create these pages in WordPress (Pages > Add New):

| WordPress Page | HTML File | Slug |
|---|---|---|
| Home | index.html | / |
| Rentals & Pricing | rentals.html | /rentals |
| Experiences | experiences.html | /experiences |
| For Groups | groups.html | /groups |
| About Us | about.html | /about |
| FAQs | faq.html | /faqs |
| Contact | contact.html | /contact |
| Book Now | book.html | /book |
| Canyon Lake Marina | locations/canyon-lake.html | /locations/canyon-lake |
| Hidden Cove *(coming soon)* | locations/hidden-cove.html | /locations/hidden-cove |

---

## Brand Colors (CSS Variables)

Add these to WordPress > Appearance > Customize > Additional CSS:

```css
:root {
  --deep-blue:  #1B3D58;   /* Deep Lake Blue — nav, dark sections, stamps */
  --heritage:   #2A5E7C;   /* Heritage Blue — accents, badges */
  --sky:        #8CBDD8;   /* Soft Sky Blue — horizontal strips */
  --orange:     #C85F24;   /* Burnt Orange — ALL booking CTAs */
  --gold:       #D4A53C;   /* Golden Sand — dark section accents */
  --cream:      #F5F2EB;   /* Warm Cream — page background */
  --cream-dk:   #EAE4D4;   /* Slightly darker cream */
  --tan:        #D8C9AC;   /* Warm tan — section strips */
  --dark-warm:  #1C1A0E;   /* Warm dark — photo overlays, footer */
  --text:       #1A1C14;   /* Near-black body text */
  --mid:        #52503C;   /* Warm grey body text */
  --border:     #CEC09A;   /* Dividers and borders */
  --card:       #FDFAF4;   /* Card backgrounds */
}
```

---

## Typography

### Fonts to Install in WordPress

1. **Sunday Romantic** *(Display font — ALL headlines)*
   - File: `fonts/SundayRomantic.otf`
   - ⚠️ This is a DEMO version. Purchase the full commercial license before going live:
     → Search "Sunday Romantic font" on Creative Market or similar
   - Register in WordPress via `functions.php` or a plugin like "Use Any Font"

2. **Oswald** *(Labels, navigation, buttons)*
   - Source: Google Fonts — already loads via CDN
   - Add to WordPress: Appearance > Customize > Fonts, or via Google Fonts plugin

3. **Lato** *(Body copy)*
   - Source: Google Fonts — already loads via CDN

### Font Hierarchy
```
Headlines/Display:  'Sunday Romantic', serif
Labels/Nav/Buttons: 'Oswald', sans-serif (700 weight, uppercase)
Body copy:          'Lato', sans-serif (400 weight)
```

---

## Icons

All icons are stored in `icons.svg` as an inline SVG sprite.

**In WordPress**, either:
1. Include the contents of `icons.svg` in the theme's `header.php` right after `<body>`
2. Or use a plugin like "SVG Support" and load it globally

Reference icons like this anywhere on the page:
```html
<svg aria-hidden="true" style="width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;">
  <use href="#ic-location"/>
</svg>
```

Available icon IDs: `ic-location`, `ic-clock`, `ic-calendar`, `ic-phone`, `ic-email`, `ic-paddle`, `ic-kayak`, `ic-sup`, `ic-vest`, `ic-group`, `ic-sun`, `ic-moon`, `ic-water`, `ic-fish`, `ic-parking`, `ic-gift`, `ic-safety`, `ic-check`, `ic-star`, `ic-camera`, `ic-music`, `ic-facebook`, `ic-gear`

---

## Photography

All photos are in `images/`. In WordPress, upload all images to the Media Library.

| File | Used For |
|------|---------|
| hero.jpg | Homepage hero |
| location-az.jpg | Canyon Lake card, page heroes, footer background |
| act-kayak.jpg | Kayak rental card |
| act-sup.jpg | SUP rental card |
| act-tours.jpg | Guided tours card |
| act-groups.jpg | Group rentals card |
| exp-sunrise.jpg | Guided canyon tour experience card |
| exp-moonlight.jpg | Full moon paddle card |
| exp-social.jpg | Group events card |
| groups-visual.jpg | Groups section photo |
| canyon-group.jpg | Reviews section, final CTA |
| sup-profile.jpg | Birthday perk section |
| paddling-reeds.jpg | Photo strip |
| dock-checkin.jpg | Photo strip, "How It Works" background |

---

## FareHarbor Booking Integration

The `book.html` page has a placeholder where the FareHarbor booking widget goes.

In WordPress:
1. Get your FareHarbor embed code from your FareHarbor dashboard
2. Paste it into the Book page in place of the placeholder
3. Book buttons throughout the site (href="book.html") should link to the WordPress book page or directly to your FareHarbor booking URL

---

## Navigation Structure

```
Logo (left)
├── Locations ▾
│   ├── Canyon Lake Marina — AZ
│   └── Hidden Cove, TX — Coming Soon
├── Rentals
├── Experiences ▾
│   ├── Guided Canyon Tours
│   ├── Full Moon Paddle
│   ├── Sunrise Paddle
│   └── Full Calendar →
├── Groups
├── About
├── FAQs
└── [BOOK NOW button — orange pill]
```

Mobile: Hamburger menu with the same links + Gift Cards + Contact

---

## Important: Pages to Hold Before Launch

These pages need client confirmation before going live:

- **Season Passes** (`passes.html`) — pricing is placeholder, confirm with client
- **Gift Cards** (`gift-cards.html`) — confirm the gift card system is active
- **Hidden Cove** (`locations/hidden-cove.html`) — shown as "Coming Soon", no services yet

---

## Contact & Business Details (Confirm Before Launch)

| Detail | Current Value | Status |
|--------|--------------|--------|
| Phone | (480) 420-8144 | ✅ Confirmed |
| Email | hello@yaknsup.com | ⚠️ Confirm this is live |
| Canyon Lake address | 16802 AZ-88, Tortilla Flat, AZ 85190 | ✅ Confirmed |
| Hidden Cove address | Lake Lewisville, TX | ⚠️ Confirm exact address |
| Social links | All pointing to # (placeholder) | ⚠️ Add real URLs |
| FareHarbor widget | Placeholder only | ⚠️ Needs embed code |

---

## Key Design Rules (Do Not Change)

1. **Burnt Orange `#C85F24`** = ALL booking/CTA buttons only
2. **Deep Lake Blue `#1B3D58`** = dark sections, text, badges
3. **Warm Cream `#F5F2EB`** = main page background
4. **Sunday Romantic** = ALL large display headlines (h1, h2)
5. **Oswald Bold uppercase** = labels, navigation, buttons
6. **No emojis** anywhere — use SVG icons only
7. **Dark photo sections** = always white/gold/cream text — never dark text on dark photos
8. **Sky blue sections** = orange headline, white headline, dark blue body text

---

## Questions?

Contact the design team before making changes to the approved layout, colors, or fonts.

*Handoff prepared June 2026*

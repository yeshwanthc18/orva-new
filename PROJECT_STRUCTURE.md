# ORVA Education Website - Project Structure

## Overview
A comprehensive, modern website for ORVA Education with 6 main pages, fully optimized component architecture, and smooth animations.

## Project Architecture

### Pages
- **Home** (`/app/page.tsx`) - Landing page with hero, process, values, reach, badge showcase, contact CTA
- **Story** (`/app/story/page.tsx`) - Company history, founder, mission/vision, timeline, team culture
- **Services** (`/app/services/page.tsx`) - Service offerings, process steps, and pricing tiers
- **Resources** (`/app/resources/page.tsx`) - Blog posts, downloadable guides, and FAQ
- **Team** (`/app/team/page.tsx`) - Team members, company values, and differentiators
- **Contact** (`/app/contact/page.tsx`) - Contact form, info cards, and submission handling

### Component Organization

#### Core Components (`/components/`)
- `Hero.tsx` - Advanced parallax hero with scroll and cursor tracking
- `Process.tsx` - 4-step process with scroll-driven timeline
- `Values.tsx` - Interactive values carousel with smooth transitions
- `Reach.tsx` - Geographic reach with parallax images
- `Badge.tsx` - 3D physics-based interactive ID card badge
- `Contact.tsx` - Home page contact section
- `Navbar.tsx` - Navigation with smooth transitions
- `Footer.tsx` - Footer with links
- `Cursor.tsx` - Custom cursor effect
- `Trail.tsx` - Mouse trail animation
- `Loader.tsx` - Initial page loader
- `ZoomParallax.tsx` - Zoom parallax section

#### Story Components (`/components/story/`)
- `StoryHero.tsx` - Page hero with gradient
- `StorySectionCard.tsx` - Alternating story sections with parallax
- `FounderSection.tsx` - Founder biography and vision
- `MissionVisionSection.tsx` - Mission, vision, and core pillars
- `TimelineSection.tsx` - Company milestones timeline
- `StatsSection.tsx` - Animated counters for key metrics
- `TeamValuesSection.tsx` - Team cultural values cards
- `StoryCTA.tsx` - Closing call-to-action

#### Services Components (`/components/services/`)
- `ServiceCard.tsx` - Individual service showcase with image parallax
- `ProcessSteps.tsx` - 4-step process timeline
- `PricingTiers.tsx` - 3-tier pricing comparison cards

#### Resources Components (`/components/resources/`)
- `FeaturedBlogPost.tsx` - Featured and archive blog post cards
- `DownloadableGuide.tsx` - Guide download cards with icons
- `FAQSection.tsx` - Expandable FAQ accordion

#### Team Components (`/components/team/`)
- `TeamMemberCard.tsx` - Individual team member profiles
- `ValueCard.tsx` - Company value display cards
- `WhyChooseSection.tsx` - Differentiators section

#### Contact Components (`/components/contact/`)
- `ContactHero.tsx` - Page hero
- `ContactInfoCard.tsx` - Contact information cards
- `ContactForm.tsx` - Contact form with validation

### Utilities & Configuration

#### Animation Library (`/lib/animations.ts`)
```typescript
- fadeInUp, fadeInDown, fadeInLeft, fadeInRight
- scaleIn, slideInFromLeft, slideInFromRight
- staggerContainer, staggerItem
- easeOutCubic, easeInOutQuart, easeOutExpo
- transitionConfig (fast, normal, slow)
```

#### Constants (`/lib/constants.ts`)
```typescript
- COLORS - Complete color palette
- STORY_SECTIONS - Story page content
- TIMELINE_EVENTS - Company milestones
- MISSION_PILLARS - Core company values
- CONTACT_INFO - Contact information
```

### Design System

#### Color Palette
```
Primary Red: #D51E20
Dark Red: #520A0B
Deep Black: #0F0F0F
Warm Cream: #FBF9F6
Warm Sand: #F5F2ED
Text Dark: #1C1C1C
Text Light: rgba(28,28,28,0.78)
Text Muted: rgba(28,28,28,0.45)
Accent Orange: #FA8322
```

#### Typography
- **Font**: Cairo (Arabic/Latin, loaded via system)
- **Headings**: 900 weight, tight line-height (0.9-1.1)
- **Body**: 300-400 weight, relaxed line-height (1.6-1.8)
- **Labels**: 700 weight, uppercase, letter-spacing 0.2-0.4em

#### Animations
- **Default Duration**: 0.7-0.8s
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)
- **Stagger**: 0.08-0.1s between items
- **Scroll Parallax**: GPU-optimized transforms

## File Structure
```
/app
  ├── page.tsx (home)
  ├── story/
  │   └── page.tsx
  ├── services/
  │   └── page.tsx
  ├── resources/
  │   └── page.tsx
  ├── team/
  │   └── page.tsx
  ├── contact/
  │   └── page.tsx
  └── layout.tsx

/components
  ├── (core)
  │   ├── Hero.tsx
  │   ├── Process.tsx
  │   ├── Values.tsx
  │   ├── Reach.tsx
  │   ├── Badge.tsx
  │   ├── Contact.tsx
  │   ├── Navbar.tsx
  │   ├── Footer.tsx
  │   ├── Cursor.tsx
  │   ├── Trail.tsx
  │   ├── Loader.tsx
  │   └── ZoomParallax.tsx
  ├── story/
  │   ├── index.ts
  │   ├── StoryHero.tsx
  │   ├── StorySectionCard.tsx
  │   ├── FounderSection.tsx
  │   ├── MissionVisionSection.tsx
  │   ├── TimelineSection.tsx
  │   ├── StatsSection.tsx
  │   ├── TeamValuesSection.tsx
  │   └── StoryCTA.tsx
  ├── services/
  │   ├── index.ts
  │   ├── ServiceCard.tsx
  │   ├── ProcessSteps.tsx
  │   └── PricingTiers.tsx
  ├── resources/
  │   ├── index.ts
  │   ├── FeaturedBlogPost.tsx
  │   ├── DownloadableGuide.tsx
  │   └── FAQSection.tsx
  ├── team/
  │   ├── index.ts
  │   ├── TeamMemberCard.tsx
  │   ├── ValueCard.tsx
  │   └── WhyChooseSection.tsx
  └── contact/
      ├── index.ts
      ├── ContactHero.tsx
      ├── ContactInfoCard.tsx
      └── ContactForm.tsx

/lib
  ├── constants.ts
  ├── animations.ts
  └── utils.ts

/hooks
  └── useLenis.ts
```

## Key Features

### Animations & Interactions
- ✓ Scroll-driven parallax effects
- ✓ Cursor tracking and trailing
- ✓ Staggered entrance animations
- ✓ Smooth page transitions
- ✓ Interactive hover states
- ✓ 3D physics-based badge interaction

### Responsive Design
- ✓ Mobile-first approach
- ✓ Adaptive grid layouts
- ✓ Flexible typography scaling
- ✓ Touch-friendly interactions

### Performance
- ✓ Code splitting via components
- ✓ Optimized animations (GPU-accelerated)
- ✓ Lazy loading images
- ✓ Minimal bundle size

### Accessibility
- ✓ Semantic HTML
- ✓ ARIA attributes
- ✓ Keyboard navigation
- ✓ Color contrast compliance

## Development Workflow

### Adding New Pages
1. Create `/app/newpage/page.tsx`
2. Extract components into `/components/newpage/`
3. Create `index.ts` for barrel exports
4. Import in page using: `import { Component } from "@/components/newpage"`
5. Add navigation link in Navbar

### Updating Animations
- Modify `/lib/animations.ts` for shared animation configs
- Import animations in components: `import { fadeInUp } from "@/lib/animations"`
- Use with Framer Motion: `initial={fadeInUp.hidden} animate={fadeInUp.visible}`

### Updating Colors
- Modify `/lib/constants.ts` COLORS object
- Import in components: `import { COLORS } from "@/lib/constants"`
- Apply to styles: `color: COLORS.primary`

## Dependencies

### Core
- `next` - React framework
- `react` - UI library
- `framer-motion` - Animations
- `next/image` - Image optimization

### Animation & Interaction
- `@react-three/fiber` - 3D graphics
- `@react-three/drei` - 3D helpers
- `@react-three/rapier` - Physics engine
- `three` - 3D library
- `meshline` - Line rendering

### Utilities
- `lenis` - Smooth scroll

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization Tips
1. Use `next/image` for all images
2. Implement code splitting for large components
3. Leverage Framer Motion's `once` prop for scroll animations
4. Use `will-change` CSS sparingly
5. Monitor bundle size with `npm run analyze`

## Customization Guide

### Changing Brand Colors
1. Open `/lib/constants.ts`
2. Update COLORS object
3. All components automatically update

### Modifying Animation Speed
1. Update `transitionConfig` in `/lib/animations.ts`
2. Adjust `duration` values globally

### Adding New Content Sections
1. Create reusable component in appropriate folder
2. Add to index.ts barrel export
3. Import and use in page
4. Follow existing animation patterns

## Deployment
Built with Next.js - ready for Vercel deployment:
```bash
vercel deploy
```

---

**Last Updated**: June 2026
**Version**: 1.0.0
**Status**: Production Ready

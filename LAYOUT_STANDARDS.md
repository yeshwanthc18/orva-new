# Layout & Padding Standards

## Overview
Consistent spacing and padding across all pages and components for a professional, polished appearance.

## Spacing System

### Section Padding (Vertical)
- **Mobile**: `py-12` (48px)
- **Tablet**: `md:py-20` (80px)
- **Desktop**: `lg:py-28` (112px)

### Section Padding (Horizontal)
- **Mobile**: `px-4` (16px)
- **Tablet**: `sm:px-6` (24px)
- **Desktop**: `lg:px-8` (32px)

### Combined Section Padding Class
```
py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8
```

## Container Widths

| Breakpoint | Max Width | Class |
|-----------|-----------|-------|
| Mobile | 100% | `w-full` |
| Tablet | 672px | `max-w-2xl` |
| Large | 896px | `max-w-4xl` |
| XL | 1024px | `max-w-5xl` |
| 2XL | 1280px | `max-w-7xl` |

## Grid & Gap Spacing

### Grid Columns
- **Mobile**: `grid-cols-1`
- **Tablet**: `md:grid-cols-2`
- **Large**: `lg:grid-cols-3`

### Gap Spacing
- **Mobile**: `gap-4` (16px)
- **Tablet**: `md:gap-6` (24px)
- **Desktop**: `lg:gap-8` (32px)

## Element Spacing

### Padding Inside Cards/Containers
- **Small**: `p-4` (16px) - For small cards
- **Medium**: `p-6 md:p-8` (24px / 32px) - For content areas
- **Large**: `p-8 md:p-12` (32px / 48px) - For hero sections

### Margin Between Elements
- **Small**: `mb-4` (16px)
- **Medium**: `mb-6 md:mb-8` (24px / 32px)
- **Large**: `mb-12 md:mb-16` (48px / 64px)

## Header/Navbar
- **Height**: `h-16` (64px fixed)
- **Padding X**: `px-4 sm:px-6 lg:px-8`
- **Mobile Menu Top**: `top-16`

## Page Layout Pattern

```html
<main className="pt-16"> <!-- Account for fixed navbar -->
  <section className="py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <!-- Content -->
    </div>
  </section>
</main>
```

## Responsive Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| Mobile | 375px | Default, touch-optimized |
| Small | 640px | sm: - Enhanced mobile |
| Medium | 768px | md: - Tablets |
| Large | 1024px | lg: - Desktop |
| XL | 1280px | xl: - Large desktop |
| 2XL | 1536px | 2xl: - Ultra-wide |

## Typography Spacing

### Heading Margins
- **Top**: Usually none (handled by parent)
- **Bottom**: `mb-4 md:mb-6` (16px / 24px)

### Paragraph Line Height
- **Body**: `leading-relaxed` (1.625 - 26px line height)
- **Headings**: `leading-tight` (1.25 - 20px line height)

## Component Spacing Examples

### Hero Section
```
Section padding: py-20 md:py-32 px-6 md:px-12
Container: max-w-4xl mx-auto
Content gap: space-y-6
```

### Card Grid
```
Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
Card padding: p-6 md:p-8
```

### Content with Sidebar
```
Container: grid grid-cols-1 lg:grid-cols-3 gap-8
Sidebar: lg:col-span-1
Content: lg:col-span-2
```

## Mobile-First Approach

1. Start with mobile layout (no prefix)
2. Enhance at `sm:` (640px+)
3. Modify at `md:` (768px+)
4. Optimize at `lg:` (1024px+)
5. Polish at `xl:` (1280px+)

## Minimum Touch Target Sizes
- Buttons: `w-10 h-10` (40px minimum)
- Links: `p-2` (surrounding padding)

## Examples in Current Site

### Story Page Hero
```
className="py-20 md:py-32 px-6 md:px-12"
Container: max-w-4xl mx-auto
```

### Services Section
```
Section padding: py-20 md:py-32 px-6 md:px-12
Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

### Contact Info Grid
```
Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
Card: p-6 md:p-8
```

## Notes
- Always use `max-w-*` for content containers to prevent excessive line lengths
- Use `mx-auto` to center containers
- Maintain consistent gaps between grid items
- Ensure adequate padding inside cards for readability
- Test responsive layouts at all breakpoints

/**
 * Spacing & Padding System
 * Consistent spacing across all layouts
 */

export const SPACING = {
  // Section padding (vertical)
  sectionPaddingMobile: "px-4 py-12 sm:py-16",
  sectionPaddingTablet: "md:px-6 md:py-20",
  sectionPaddingDesktop: "lg:px-8 lg:py-28 xl:py-32",
  
  // Container max widths
  containerSmall: "max-w-3xl",
  containerMedium: "max-w-5xl",
  containerLarge: "max-w-7xl",
  containerXL: "max-w-7xl",
  
  // Gap utilities
  gapMobile: "gap-3 md:gap-4",
  gapTablet: "md:gap-5 lg:gap-6",
  gapDesktop: "lg:gap-7 xl:gap-8",
  
  // Padding utilities
  paddingSmall: "p-3 sm:p-4",
  paddingMedium: "p-4 sm:p-6 md:p-8",
  paddingLarge: "p-6 sm:p-8 md:p-10 lg:p-12",
  
  // Margin utilities
  marginSectionMobile: "mb-8 sm:mb-12",
  marginSectionTablet: "md:mb-16 lg:mb-20",
  marginSectionDesktop: "xl:mb-24",
} as const;

export const LAYOUT_CLASSES = {
  // Hero sections
  heroSection: "relative w-full min-h-screen py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8",
  
  // Page containers
  pageContainer: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Content sections
  contentSection: "w-full py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8",
  
  // Grid layouts
  gridResponsive: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8",
  
  // Flex layouts
  flexBetween: "flex items-center justify-between",
  flexCenter: "flex items-center justify-center",
  flexCol: "flex flex-col gap-4 md:gap-6 lg:gap-8",
};

export const HEADER_SPACING = {
  height: "h-16 min-h-16",
  paddingX: "px-4 sm:px-6 lg:px-8",
  paddingY: "py-2.5",
  mobileMenuTop: "top-16",
};

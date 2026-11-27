/**
 * @file Domain model interfaces for the hoo-wallet landing page (MVVM Model layer).
 * Follows Interface Segregation (ISP) so each view receives only the exact contract it needs.
 */

/** Represents a static image asset with explicit intrinsic dimensions to prevent CLS. */
export interface ImageAsset {
    readonly src: string
    readonly alt: string
    readonly width: number
    readonly height: number
}

/** Global document metadata and brand identity rendered in `<head>` and header landmarks. */
export interface SiteMeta {
    readonly title: string
    readonly description: string
    readonly keywords: string
    readonly author: string
    readonly brandName: string
    readonly logo: ImageAsset
}

/** Single primary navigation link displayed in the responsive navbar. */
export interface NavLink {
    readonly id: string
    readonly title: string
    readonly href: string
    readonly isCurrent?: boolean
}

/** Content contract for the above-the-fold Hero section. */
export interface HeroContent {
    readonly id: string
    readonly discountHighlight: string
    readonly discountMid: string
    readonly discountDuration: string
    readonly discountSuffix: string
    readonly discountIcon: ImageAsset
    readonly headingLineOne: string
    readonly headingAccent: string
    readonly headingLineTwo: string
    readonly description: string
    readonly heroImage: ImageAsset
}

/** Single key platform metric displayed in the Stats strip. */
export interface StatItem {
    readonly id: string
    readonly value: string
    readonly title: string
}

/** Feature highlight card data rendered in the Business section. */
export interface FeatureItem {
    readonly id: string
    readonly icon: string
    readonly iconAlt: string
    readonly title: string
    readonly content: string
}

/** Copy and CTA contract for the Business value-proposition section. */
export interface BusinessContent {
    readonly id: string
    readonly headingLineOne: string
    readonly headingLineTwo: string
    readonly description: string
    readonly ctaLabel: string
    readonly ctaHref: string
}

/** Mobile app store badge link (App Store / Google Play) rendered in the Billing section. */
export interface StoreBadge {
    readonly id: string
    readonly image: ImageAsset
    readonly href: string
    readonly label: string
}

/** Content contract for the Billing & Invoicing section. */
export interface BillingContent {
    readonly id: string
    readonly headingLineOne: string
    readonly headingLineTwo: string
    readonly description: string
    readonly image: ImageAsset
    readonly storeBadges: readonly StoreBadge[]
}

/** Content contract for the Card Deal comparison section. */
export interface CardDealContent {
    readonly headingLineOne: string
    readonly headingLineTwo: string
    readonly description: string
    readonly ctaLabel: string
    readonly ctaHref: string
    readonly image: ImageAsset
}

/** Customer quote and author metadata rendered in a TestimonialCard. */
export interface TestimonialItem {
    readonly id: string
    readonly content: string
    readonly name: string
    readonly title: string
    readonly avatar: ImageAsset
}

/** Header copy contract for the Testimonials section. */
export interface TestimonialsContent {
    readonly id: string
    readonly headingLineOne: string
    readonly headingLineTwo: string
    readonly description: string
}

/** Partner logo entry rendered in the Clients strip. */
export interface ClientBrand {
    readonly id: string
    readonly name: string
    readonly logo: ImageAsset
}

/** Content contract for the bottom Call-To-Action banner. */
export interface CtaContent {
    readonly heading: string
    readonly description: string
    readonly ctaLabel: string
    readonly ctaHref: string
}

/** Single hyperlink inside a footer navigation column. */
export interface FooterLink {
    readonly name: string
    readonly href: string
}

/** Titled group of links rendered as a column in the site footer. */
export interface FooterLinkGroup {
    readonly title: string
    readonly links: readonly FooterLink[]
}

/** External social media icon link rendered in the footer bar. */
export interface SocialLink {
    readonly id: string
    readonly label: string
    readonly icon: string
    readonly href: string
}

/** Brand identity and copyright metadata for the site footer. */
export interface FooterContent {
    readonly logo: ImageAsset
    readonly tagline: string
    readonly copyright: string
}

/**
 * Aggregated landing page model contract (ISP + DIP).
 * Any static, CMS, or API-backed data provider implementing this contract
 * can be injected into `LandingViewModel` without modifying Views.
 */
export interface ILandingModel {
    readonly meta: SiteMeta
    readonly navLinks: readonly NavLink[]
    readonly hero: HeroContent
    readonly stats: readonly StatItem[]
    readonly business: BusinessContent
    readonly features: readonly FeatureItem[]
    readonly billing: BillingContent
    readonly cardDeal: CardDealContent
    readonly testimonialsHeader: TestimonialsContent
    readonly testimonials: readonly TestimonialItem[]
    readonly clients: readonly ClientBrand[]
    readonly cta: CtaContent
    readonly footer: FooterContent
    readonly footerLinkGroups: readonly FooterLinkGroup[]
    readonly socialLinks: readonly SocialLink[]
}

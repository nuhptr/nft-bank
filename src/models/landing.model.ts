export interface ImageAsset {
    readonly src: string
    readonly alt: string
    readonly width: number
    readonly height: number
}

export interface SiteMeta {
    readonly title: string
    readonly description: string
    readonly keywords: string
    readonly author: string
    readonly brandName: string
    readonly logo: ImageAsset
}

export interface NavLink {
    readonly id: string
    readonly title: string
    readonly href: string
    readonly isCurrent?: boolean
}

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

export interface StatItem {
    readonly id: string
    readonly value: string
    readonly title: string
}

export interface FeatureItem {
    readonly id: string
    readonly icon: string
    readonly iconAlt: string
    readonly title: string
    readonly content: string
}

export interface BusinessContent {
    readonly id: string
    readonly headingLineOne: string
    readonly headingLineTwo: string
    readonly description: string
    readonly ctaLabel: string
    readonly ctaHref: string
}

export interface StoreBadge {
    readonly id: string
    readonly image: ImageAsset
    readonly href: string
    readonly label: string
}

export interface BillingContent {
    readonly id: string
    readonly headingLineOne: string
    readonly headingLineTwo: string
    readonly description: string
    readonly image: ImageAsset
    readonly storeBadges: readonly StoreBadge[]
}

export interface CardDealContent {
    readonly headingLineOne: string
    readonly headingLineTwo: string
    readonly description: string
    readonly ctaLabel: string
    readonly ctaHref: string
    readonly image: ImageAsset
}

export interface TestimonialItem {
    readonly id: string
    readonly content: string
    readonly name: string
    readonly title: string
    readonly avatar: ImageAsset
}

export interface TestimonialsContent {
    readonly id: string
    readonly headingLineOne: string
    readonly headingLineTwo: string
    readonly description: string
}

export interface ClientBrand {
    readonly id: string
    readonly name: string
    readonly logo: ImageAsset
}

export interface CtaContent {
    readonly heading: string
    readonly description: string
    readonly ctaLabel: string
    readonly ctaHref: string
}

export interface FooterLink {
    readonly name: string
    readonly href: string
}

export interface FooterLinkGroup {
    readonly title: string
    readonly links: readonly FooterLink[]
}

export interface SocialLink {
    readonly id: string
    readonly label: string
    readonly icon: string
    readonly href: string
}

export interface FooterContent {
    readonly logo: ImageAsset
    readonly tagline: string
    readonly copyright: string
}

/** Segregated Model Contract (ISP + DIP) */
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

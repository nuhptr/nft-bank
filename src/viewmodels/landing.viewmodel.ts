/**
 * @file Presentation ViewModel mediating between {@link ILandingModel} and Astro Views (MVVM + DIP).
 */
import { LANDING_DATA } from "@models/landing.data"
import type { ILandingModel } from "@models/landing.model"

/**
 * Shapes domain model data into focused prop slices for each landing page section.
 * Accepts any {@link ILandingModel} implementation via constructor injection (DIP / LSP).
 */
export class LandingViewModel {
    /**
     * @param model - Domain data source supplying all landing page content.
     */
    constructor(private readonly model: ILandingModel) {}

    /** Document `<head>` metadata and brand logo. */
    get meta() {
        return this.model.meta
    }

    /** Props for the primary `Navbar` section. */
    get navbar() {
        return {
            logo: this.model.meta.logo,
            links: this.model.navLinks,
        }
    }

    /** Props for the `Hero` section. */
    get hero() {
        return this.model.hero
    }

    /** Platform metric items for the `Stats` strip. */
    get stats() {
        return this.model.stats
    }

    /** Props for the `Business` section and its feature cards. */
    get business() {
        return {
            content: this.model.business,
            features: this.model.features,
        }
    }

    /** Props for the `Billing` section. */
    get billing() {
        return this.model.billing
    }

    /** Props for the `CardDeal` section. */
    get cardDeal() {
        return this.model.cardDeal
    }

    /** Props for the `Testimonials` section header and feedback cards. */
    get testimonials() {
        return {
            content: this.model.testimonialsHeader,
            items: this.model.testimonials,
        }
    }

    /** Partner brand logos for the `Clients` strip. */
    get clients() {
        return this.model.clients
    }

    /** Props for the `CallToAction` banner. */
    get cta() {
        return this.model.cta
    }

    /** Props for the `Footer` landmark, navigation columns, and social links. */
    get footer() {
        return {
            content: this.model.footer,
            linkGroups: this.model.footerLinkGroups,
            socials: this.model.socialLinks,
        }
    }
}

/**
 * Factory helper that instantiates a {@link LandingViewModel} with the default static model
 * or a custom {@link ILandingModel} override.
 *
 * @param model - Optional custom model implementation (defaults to {@link LANDING_DATA}).
 * @returns Configured {@link LandingViewModel} instance ready for view binding.
 */
export function createLandingViewModel(model: ILandingModel = LANDING_DATA): LandingViewModel {
    return new LandingViewModel(model)
}

import { LANDING_DATA } from "@models/landing.data"
import type { ILandingModel } from "@models/landing.model"

/**
 * LandingViewModel (MVVM + DIP):
 * Mediates between the Model (ILandingModel) and the Astro Views.
 * Any data source implementing ILandingModel can be injected without touching Views.
 */
export class LandingViewModel {
    constructor(private readonly model: ILandingModel) {}

    get meta() {
        return this.model.meta
    }

    get navbar() {
        return {
            logo: this.model.meta.logo,
            links: this.model.navLinks,
        }
    }

    get hero() {
        return this.model.hero
    }

    get stats() {
        return this.model.stats
    }

    get business() {
        return {
            content: this.model.business,
            features: this.model.features,
        }
    }

    get billing() {
        return this.model.billing
    }

    get cardDeal() {
        return this.model.cardDeal
    }

    get testimonials() {
        return {
            content: this.model.testimonialsHeader,
            items: this.model.testimonials,
        }
    }

    get clients() {
        return this.model.clients
    }

    get cta() {
        return this.model.cta
    }

    get footer() {
        return {
            content: this.model.footer,
            linkGroups: this.model.footerLinkGroups,
            socials: this.model.socialLinks,
        }
    }
}

export function createLandingViewModel(model: ILandingModel = LANDING_DATA): LandingViewModel {
    return new LandingViewModel(model)
}

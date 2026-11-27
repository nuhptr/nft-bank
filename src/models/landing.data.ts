/**
 * @file Static data source implementing {@link ILandingModel} for the hoo-wallet landing page.
 */
import type { ILandingModel } from "@models/landing.model"

/** Default immutable landing page dataset injected into `LandingViewModel`. */
export const LANDING_DATA: ILandingModel = {
    meta: {
        title: "Hoobank | Home",
        description: "Hoobank is a modern landing page to manage money effortlessly.",
        keywords: "astro, bank, fintech, payments, tailwindcss",
        author: "Adi Nugraha Putra",
        brandName: "HooBank",
        logo: { src: "/logo.svg", alt: "HooBank", width: 124, height: 32 },
    },

    navLinks: [
        { id: "home", title: "Home", href: "#home", isCurrent: true },
        { id: "features", title: "Features", href: "#features" },
        { id: "product", title: "Product", href: "#product" },
        { id: "clients", title: "Clients", href: "#clients" },
    ],

    hero: {
        id: "home",
        discountHighlight: "20%",
        discountMid: "Discount For",
        discountDuration: "1 Month",
        discountSuffix: "Account",
        discountIcon: { src: "/discount.svg", alt: "", width: 32, height: 32 },
        headingLineOne: "The Next",
        headingAccent: "Generation",
        headingLineTwo: "Payment Method.",
        description:
            "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
        heroImage: {
            src: "/robot.png",
            alt: "Futuristic robotic hand holding floating payment cards",
            width: 1338,
            height: 1348,
        },
    },

    stats: [
        { id: "stats-1", title: "User Active", value: "3800+" },
        { id: "stats-2", title: "Trusted by Company", value: "230+" },
        { id: "stats-3", title: "Transaction", value: "$230M+" },
    ],

    business: {
        id: "features",
        headingLineOne: "You do the business,",
        headingLineTwo: "we'll handle the money.",
        description:
            "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.",
        ctaLabel: "Get Started",
        ctaHref: "#product",
    },

    features: [
        {
            id: "feature-1",
            icon: "/star.svg",
            iconAlt: "Rewards star icon",
            title: "Rewards",
            content:
                "The best credit cards offer some tantalizing combinations of promotions and prizes",
        },
        {
            id: "feature-2",
            icon: "/shield.svg",
            iconAlt: "Security shield icon",
            title: "100% Secured",
            content:
                "We take proactive steps make sure your information and transactions are secure.",
        },
        {
            id: "feature-3",
            icon: "/send.svg",
            iconAlt: "Balance transfer icon",
            title: "Balance Transfer",
            content:
                "A balance transfer credit card can save you a lot of money in interest charges.",
        },
    ],

    billing: {
        id: "product",
        headingLineOne: "Easily control your",
        headingLineTwo: "billing & invoicing.",
        description:
            "We can easily control your billing and invoice without you thinking about it, so don't worry about forget it. We can help you.",
        image: {
            src: "/bill.png",
            alt: "Billing and invoicing dashboard preview",
            width: 1120,
            height: 1038,
        },
        storeBadges: [
            {
                id: "apple-store",
                label: "Download on the App Store",
                href: "https://www.apple.com/app-store/",
                image: { src: "/apple.svg", alt: "App Store", width: 128, height: 42 },
            },
            {
                id: "google-play",
                label: "Get it on Google Play",
                href: "https://play.google.com/",
                image: { src: "/google.svg", alt: "Google Play", width: 128, height: 42 },
            },
        ],
    },

    cardDeal: {
        headingLineOne: "Find a better card deal",
        headingLineTwo: "in few easy steps.",
        description:
            "HooBank makes it easy to find the best card deal for your payments, so you don't have to worry about hidden charges again.",
        ctaLabel: "Get Started",
        ctaHref: "#clients",
        image: {
            src: "/card.png",
            alt: "Card deal analysis preview",
            width: 1026,
            height: 899,
        },
    },

    testimonialsHeader: {
        id: "clients",
        headingLineOne: "What people are",
        headingLineTwo: "saying about us",
        description:
            "Everything you need to accept card payments and grow your business anywhere on the planet.",
    },

    testimonials: [
        {
            id: "feedback-1",
            content:
                "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
            name: "Herman Jensen",
            title: "Founder & Leader",
            avatar: { src: "/people01.png", alt: "Herman Jensen", width: 48, height: 48 },
        },
        {
            id: "feedback-2",
            content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
            name: "Steve Mark",
            title: "Founder & Leader",
            avatar: { src: "/people02.png", alt: "Steve Mark", width: 48, height: 48 },
        },
        {
            id: "feedback-3",
            content:
                "It is usually people in the money business, finance, and international trade that are really rich.",
            name: "Kenn Gallagher",
            title: "Founder & Leader",
            avatar: { src: "/people03.png", alt: "Kenn Gallagher", width: 48, height: 48 },
        },
    ],

    clients: [
        {
            id: "client-1",
            name: "Airbnb",
            logo: { src: "/airbnb.png", alt: "Airbnb", width: 386, height: 120 },
        },
        {
            id: "client-2",
            name: "Binance",
            logo: { src: "/binance.png", alt: "Binance", width: 385, height: 78 },
        },
        {
            id: "client-3",
            name: "Coinbase",
            logo: { src: "/coinbase.png", alt: "Coinbase", width: 379, height: 83 },
        },
        {
            id: "client-4",
            name: "Dropbox",
            logo: { src: "/dropbox.png", alt: "Dropbox", width: 386, height: 76 },
        },
    ],

    cta: {
        heading: "Let’s try our service now!",
        description:
            "Everything you need to accept card payments and grow your business anywhere on the planet.",
        ctaLabel: "Get Started",
        ctaHref: "#home",
    },

    footer: {
        logo: { src: "/logo.svg", alt: "HooBank", width: 266, height: 72 },
        tagline: "A new way to make the payments easy, reliable and secure.",
        copyright: "Copyright © 2021 HooBank. All Rights Reserved.",
    },

    footerLinkGroups: [
        {
            title: "Useful Links",
            links: [
                { name: "Content", href: "https://www.hoobank.com/content/" },
                { name: "How it Works", href: "https://www.hoobank.com/how-it-works/" },
                { name: "Create", href: "https://www.hoobank.com/create/" },
                { name: "Explore", href: "https://www.hoobank.com/explore/" },
                { name: "Terms & Services", href: "https://www.hoobank.com/terms-and-services/" },
            ],
        },
        {
            title: "Community",
            links: [
                { name: "Help Center", href: "https://www.hoobank.com/help-center/" },
                { name: "Partners", href: "https://www.hoobank.com/partners/" },
                { name: "Suggestions", href: "https://www.hoobank.com/suggestions/" },
                { name: "Blog", href: "https://www.hoobank.com/blog/" },
                { name: "Newsletters", href: "https://www.hoobank.com/newsletters/" },
            ],
        },
        {
            title: "Partner",
            links: [
                { name: "Our Partner", href: "https://www.hoobank.com/our-partner/" },
                { name: "Become a Partner", href: "https://www.hoobank.com/become-a-partner/" },
            ],
        },
    ],

    socialLinks: [
        {
            id: "social-media-1",
            label: "Instagram",
            icon: "/instagram.svg",
            href: "https://www.instagram.com/",
        },
        {
            id: "social-media-2",
            label: "Facebook",
            icon: "/facebook.svg",
            href: "https://www.facebook.com/",
        },
        {
            id: "social-media-3",
            label: "Twitter",
            icon: "/twitter.svg",
            href: "https://www.twitter.com/",
        },
        {
            id: "social-media-4",
            label: "LinkedIn",
            icon: "/linkedin.svg",
            href: "https://www.linkedin.com/",
        },
    ],
}

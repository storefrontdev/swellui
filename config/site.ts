interface SiteConfig {
  name: string
  description: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Swell UI",
  description:
    "Components for your E-commerce store. Designed with Tailwind CSS.",
  links: {
    twitter: "https://twitter.com/cmcollin41",
    github: "https://github.com/swellstore/swellui",
  },
}

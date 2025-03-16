export interface ArticleType {
    title: string
    date: Date
    subTitle?: string
    link?: string
    skills?: string[]
}

export interface ProjectType extends ArticleType {
    imageSrc?: string
    order?: number
}

export interface AnchorTextType {
    href: string
    target?: string
    class?: string
    noFollow?: boolean
}

export interface SocialNetworkType {
    link: string
    src: string
    alt: string
    isMail?: boolean
}

export interface TechSkillType {
    title: string
    src: string
}

export type lang = "en" | "es"
export type ProjectImageType = Pick<ProjectType, "title" | "imageSrc" | "link">
export type ArticleHeadingType = Pick<ArticleType, "title" | "link">
export type ArticleSkillsType = Required<Pick<ArticleType, "skills">>
export type ArticleDateType = Pick<ArticleType, "date"> & { isProject: boolean }
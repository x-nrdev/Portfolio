export interface ArticleType {
    title: string
    date: string
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
}

export interface SocialNetworkType {
    link: string
    src: string
    alt: string
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

export interface TransitionAnimation {
    name: string // The name of the keyframe
    delay?: number | string
    duration?: number | string
    easing?: string
    fillMode?: string
    direction?: string
}

export interface TransitionAnimationPair {
    old: TransitionAnimation | TransitionAnimation[]
    new: TransitionAnimation | TransitionAnimation[]
}

export interface TransitionDirectionalAnimations {
    forwards: TransitionAnimationPair
    backwards: TransitionAnimationPair
}
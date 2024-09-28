export interface ArticleType {
    title: string
    date: string
    link?: string
    skills?: string[]
}

export interface ProjectType extends ArticleType {
    imageSrc?: string
    order?: number
}

export type ProjectImageType = Pick<ProjectType, "title" | "imageSrc" | "link">
export type ArticleHeadingType = Pick<ArticleType, "title" | "link">
export type ArticleSkillsType = Required<Pick<ArticleType, "skills">>
export type ArticleDateType = Pick<ArticleType, "date"> & { isProject: boolean }
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
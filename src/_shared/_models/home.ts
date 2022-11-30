interface ItemModel {
  img_url: string,
  title: string,
  description: string,
  resource_link: string
}

interface CarouselModel {
  title: string,
  img_name: string,
  alt: string,
  description: string,
  resource_link: string
}

interface ContentModel1{
  prerequisites: { name: string; resourceLink: string; }[]
}

interface ContentModel2{
  long_name: string,
  short_name: string,
  description: string[],
}

interface Cont{
  prerequisites?: { name?: string; resourceLink?: string; }[],
  long_name?: string, short_name?: string, description?: string[]
}

interface ContentModel{
  aim_objectives: { aim: string; objectives: string[] },
  prerequisites?: { name: string; resourceLink: string; }[],
  main_content: { long_name: string, short_name: string, description: string[] }[]
  references?: {name: string, ref: string}[]
}

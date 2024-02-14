export interface ServerResponse<T> {
    count: number
    next: string
    previous: any
    results: T[]
  }
  
  export interface IArticle {
    id: string
    title: string
    url: string
    image_url: string
    news_site: string
    summary: string
    published_at: string
    updated_at: string
    featured: boolean
    launches: Launch[]
    events: Event[]
  }
  
  export interface Launch {
    launch_id: string
    provider: string
  }
  
  export interface Event {
    event_id: number
    provider: string
  }
  
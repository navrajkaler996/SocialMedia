export interface Post {
    postid: number,
    userid: number,
    type: string,
    band: string,
    postedat: any,
    text: string,
    image: string,
    poll: string,
    title: string
}

export interface getPostsByUserIdParams {
    userId: number,
    offset: number
}
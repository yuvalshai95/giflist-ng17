import { RedditPost } from './reddit-post.interface';

export interface RedditResponse {
  data: RedditResponseData;
}

interface RedditResponseData {
  children: RedditPost[];
}

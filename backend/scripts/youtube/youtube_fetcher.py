import random
from googleapiclient.discovery import build

class YouTubeRandomVideoFetcher:
    def __init__(self, api_key):
        """Initialize the YouTube Data API client."""
        self.youtube = build('youtube', 'v3', developerKey=api_key)

    def get_random_video(self, query, max_results=10):
        """
        Search for videos on YouTube based on the query and return a random video.

        Args:
            query (str): The search query.
            max_results (int): The maximum number of search results to consider.

        Returns:
            tuple: A tuple containing the video URL and title, or None if no videos are found.
        """
        # Search for videos on YouTube based on the query
        search_response = self.youtube.search().list(
            q=query,
            type='video',
            part='id,snippet',
            maxResults=max_results
        ).execute()

        # Extract video details
        videos = search_response.get('items', [])

        if not videos:
            return {
                "responseCode": 500,
                "error": "No video has been found"
            }

        # Select a random video
        video = random.choice(videos)
        video_id = video['id']['videoId']
        video_title = video['snippet']['title']



        return {
            "responseCode": 200,
            "video":f'https://www.youtube.com/watch?v={video_id}',
            "title": video_title
        }
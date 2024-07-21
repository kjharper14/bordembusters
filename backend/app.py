from flask import Flask, request, jsonify
from scripts.youtube.youtube_fetcher import YouTubeRandomVideoFetcher
# import subprocess
from flask_cors import CORS

app = Flask(__name__)

# Apply CORS to the entire app
CORS(app)

@app.route('/youtube', methods=['POST'])
def run_script():
    # Example of calling a Python script
    try:
        # Replace 'your_script.py' with the path to your Python script
        # result = subprocess.run(['python', 'scripts/youtube/youtube.py'], capture_output=True, text=True)
        query = request.get_json().get('query', 'funny cat videos')

        youtube_fetcher = YouTubeRandomVideoFetcher('AIzaSyC8Q9x8vSbTaywvQJXW8Gf2fWoCh1RUJ0A' )
        video = youtube_fetcher.get_random_video(query)
        return jsonify({"output": video})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

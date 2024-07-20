from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    text = data.get('text')
    print(f'User sent: {text}')
    response = {'received_text': text}
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)

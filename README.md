# WhatsAppClone
💬 WhatsApp Clone (Flask + HTML/CSS/JS)

A simple WhatsApp-like chat application built using Flask (Python backend) with HTML, CSS, and JavaScript on the frontend.
This project demonstrates full-stack fundamentals including frontend UI, backend setup, database integration, and client–server communication.

🚀 Features

📄 Clean WhatsApp-style UI

⚙️ Flask backend with SQLAlchemy ORM

🗄️ SQLite database for user data

📩 Message sending using JavaScript fetch() API

🔄 Dynamic message updates without page reload

🧱 Simple and beginner-friendly project structure

🛠️ Tech Stack

Frontend

HTML5

CSS3

JavaScript (Vanilla)

Backend

Python

Flask

Flask-SQLAlchemy

Database

SQLite

📁 Project Structure
├── main.py              # Flask backend
├── whatsapp.html        # Main frontend HTML file
├── style.css            # Styling for UI
├── script.js            # Frontend logic (JS)
├── example.db           # SQLite database (auto-generated)
└── README.md            # Project documentation

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/whatsapp-clone.git
cd whatsapp-clone

2️⃣ Create Virtual Environment (Recommended)
python -m venv venv
venv\Scripts\activate     # Windows
# source venv/bin/activate  # Linux / macOS

3️⃣ Install Dependencies
pip install flask flask-sqlalchemy

4️⃣ Run the Application
python main.py


The server will start at:

http://127.0.0.1:5000/

🧪 How It Works

main.py initializes a Flask app and sets up a SQLite database

User model stores basic user information

Frontend sends messages using JavaScript fetch()

Backend processes requests and responds dynamically

UI updates messages without refreshing the page

📌 Future Improvements

🔐 User authentication (login & signup)

💬 Real-time messaging using WebSockets (Socket.IO)

👥 Multiple chat rooms / contacts

📱 Responsive mobile UI

☁️ Cloud database integration

🎯 Learning Outcomes

Understanding Flask project structure

Frontend–backend communication

Working with SQLAlchemy ORM

Building a basic full-stack web application

👨‍💻 Author

Arpit Baviskar
🎓 Robotics | Full Stack | AI | Computer Vision
⚽ College Football Player
🏆 Hackathon Runner-Up

⭐ Support

If you like this project:

⭐ Star the repo

🍴 Fork it

🧠 Improve it

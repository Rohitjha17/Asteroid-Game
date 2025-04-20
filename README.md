# Asteroid Game

A modern web-based asteroid shooting game with user authentication and difficulty levels.

## Features

- 🎮 Real-time asteroid shooting gameplay
- 🔐 User authentication (Sign up/Sign in)
- 🎯 Multiple difficulty levels
- 📱 Responsive design for all devices
- 🏆 Score tracking
- 🎨 Modern UI with gradient designs

## Technologies Used

- HTML5 Canvas for game rendering
- Firebase Authentication
- Modern CSS3 with Flexbox
- Responsive Design
- JavaScript ES6+

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Asteroid-Game.git
cd Asteroid-Game
```

2. Set up Firebase:
   - Create a new Firebase project
   - Enable Authentication in Firebase Console
   - Add your Firebase configuration in `config.js`

3. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
# or
php -S localhost:8000
```

4. Visit `http://localhost:8000` in your browser

## Game Controls

- Move: Arrow keys or WASD
- Shoot: Space bar
- Pause: P
- Sign out: Top right button

## Project Structure

```
Asteroid-Game/
├── index.html
├── style.css
├── js/
│   ├── game.js
│   ├── auth.js
│   └── config.js
├── assets/
│   └── images/
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Font Awesome for icons
- Firebase for authentication
- Poppins font from Google Fonts 
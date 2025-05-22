# 📱 Mobile-ToDo

**Mobile-ToDo** is a sleek and intuitive task management app built with [React Native](https://reactnative.dev). It helps you organize your tasks, track progress, and boost productivity with features like task filtering, dark mode, and more.

---

## 🚀 Features

- ✅ **Add, Edit, and Delete Tasks**: Manage your to-do list effortlessly.
- 🌗 **Dark Mode**: Seamlessly switch between light and dark themes.
- 🔍 **Search and Filter**: Quickly find tasks or filter by status (e.g., completed, pending).
- 📊 **Progress Tracking**: View your progress with task completion stats.
- 🔔 **Reminders**: Get notified about upcoming tasks (future feature).
- 🌐 **Localization**: Support for multiple languages (future feature).

---

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev)
- **Navigation**: [React Navigation](https://reactnavigation.org)
- **UI Components**: [React Native Paper](https://callstack.github.io/react-native-paper/)
- **State Management**: React Context API
- **Styling**: Custom themes for light and dark modes
- **Data**: Dummy data for development, easily replaceable with an API or database

---

## 📖 Getting Started

Follow these steps to set up and run the app locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn
- Android Studio (for Android development)
- Xcode (for iOS development)
- React Native CLI

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mobile-todo.git
   cd mobile-todo
   ```

2. Install dependencies:
   ```sh
   # Using npm
   npm install

   # OR using Yarn
   yarn install
   ```

3. Install CocoaPods (for iOS):
   ```sh
   cd ios
   pod install
   cd ..
   ```

---

## 🏃‍♂️ Running the App

### Start Metro Bundler
Run the Metro bundler in your project root:
```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Run on Android
```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### Run on iOS
```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

---

## ✨ App Preview

| Light Mode | Dark Mode |
|------------|-----------|
| ![Screenshot_1747923392](https://github.com/user-attachments/assets/05acef16-6349-471a-b6e6-5e26dc60b057) | ![Screenshot_1747923527](https://github.com/user-attachments/assets/b355bc7f-ba33-4d08-a2e4-631691c1bf6d) |

---

## 🧩 Folder Structure

```
MobileToDo/
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # Context API for state management
│   ├── data/             # Dummy data for development
│   ├── model/            # TypeScript models
│   ├── navigation/       # Navigation stack
│   ├── screens/          # App screens (e.g., TodoScreen)
│   ├── theme/            # Light and dark themes
│   └── utils/            # Utility functions
├── App.tsx               # Entry point of the app
├── README.md             # Project documentation
└── package.json          # Project dependencies
```

---

## 🐛 Troubleshooting

### Common Issues

- **Metro Bundler not starting**:
  - Run `npm start --reset-cache` or `yarn start --reset-cache`.

- **Android build fails**:
  - Ensure Android Studio is installed and the emulator is running.

- **iOS build fails**:
  - Run `pod install` in the `ios` directory.

For more help, check the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgments

- [React Native](https://reactnative.dev) for the amazing framework.
- [React Native Paper](https://callstack.github.io/react-native-paper/) for the beautiful UI components.
- [React Navigation](https://reactnavigation.org) for seamless navigation.

---

## 📬 Contact

For questions or feedback, feel free to reach out:

- **GitHub**: [jonavon7](https://github.com/jonavon7)

---

Happy coding! 🚀

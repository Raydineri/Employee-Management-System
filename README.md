# 👥 Employee Management System

A simple and efficient Angular application for managing employee records with full CRUD operations.

## ✨ Features

- ➕ Add new employees
- 📋 View employee list
- ✏️ Edit employee information
- 🗑️ Delete employees
- 🔄 JSON Server for backend simulation

## 🛠️ Technologies Used

- 🅰️ **Angular** - Frontend framework
- 📘 **TypeScript** - Programming language
- 🌐 **JSON Server** - Mock REST API
- 🎨 **Bootstrap** - UI styling (if applicable)

## 🚀 Getting Started

### 📋 Prerequisites

- 📦 Node.js
- 📥 npm

### ⚙️ Installation

1. 📥 **Clone the repository**
   ```bash
   git clone https://github.com/Raydineri/Employee-Management-System.git
   cd Employee-Management-System
   ```

2. 📦 **Install dependencies**
   ```bash
   npm install
   ```

3. 🌐 **Start the JSON server**
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. 🚀 **Start the Angular application**
   ```bash
   ng serve
   ```

5. 🌍 **Open your browser** and navigate to `http://localhost:4200`

## 📁 Project Structure

```
src/
├── app/
│   ├── emp-add-edit/     # 👤 Employee add/edit component
│   └── employee.service.ts  # 🔧 Service for employee operations
└── db.json               # 💾 JSON database for development
```

## 💻 Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. 🔄

## 🏗️ Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 📦


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 💡

## 📄 License

This project is licensed under the MIT License. 📜

## 👨‍💻 Author

**Raydineri** - [GitHub Profile](https://github.com/Raydineri) 🚀

---

⭐ If you found this project helpful, please give it a star!

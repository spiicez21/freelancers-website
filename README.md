# 🎓 College Freelancers Portfolio Platform

A premium, high-impact portfolio platform designed for college freelancers to showcase their work, connect with clients, and manage their professional identity. Built with a focus on modern aesthetics, including **Discord-style** profile layouts and **Glassmorphism** UI.

![Discord Style Profile](Frontend/src/assets/preview.png) *(Note: Add your own project screenshot here)*

## ✨ Key Features

- **🚀 High-Impact Hero Section**: Engaging landing page with modern animations and clear call-to-actions.
- **🤝 Members Explorer**: Search and filter through elite student talent with search and category filtering.
- **🎨 Discord-Style Profiles**: Bold, high-contrast profile cards with 50% image overlap, status indicators, and glassmorphic details.
- **📁 Projects Showcase**: Unified gallery of work across all members, categorizable by design, development, marketing, and more.
- **✍️ Profile Management**: Comprehensive "Edit Profile" page to manage bio, tech stack, social links, and showcase projects.
- **🆕 Onboarding Flow**: Seamless multi-step onboarding for new members to establish their professional presence.
- **🛡️ Admin Dashboard**: Secure interface for reviewing and approving new member applications.
- **🌙 Dark Mode Optimized**: Fully responsive design with native-feeling dark and light mode support.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) (Icons)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **State Management**: React Context API (AuthContext)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/spiicez21/freelancers-website.git
   cd freelancers-website
   ```

2. **Install dependencies**:
   ```bash
   cd Frontend
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
Frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components (MemberCard, ProjectCard, etc.)
│   ├── context/     # AuthContext for state & mock persistence
│   ├── data/        # Centralized mock data JSON
│   ├── pages/       # Page components (Home, Portfolio, Admin, etc.)
│   ├── App.tsx      # Main routing configuration
│   └── index.css    # Global styles & Tailwind directives
└── package.json     # Project dependencies and scripts
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ❤️ by the Freelancers Platform Team.

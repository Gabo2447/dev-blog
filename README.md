# GL | Dev Blog

A modern, personal development blog built with Next.js, featuring articles, tutorials, and insights on web development, programming best practices, and modern technologies.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout with Tailwind CSS
- **Tag-based Filtering**: Filter blog posts by technology tags
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Type-Safe**: Full TypeScript support for better developer experience
- **Testing Ready**: Configured with Jest and React Testing Library
- **Feature-Based Architecture**: Organized codebase with clear separation of concerns

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [nuqs](https://nuqs.47ng.com/) for URL state
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/react)
- **Linting**: [ESLint](https://eslint.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
dev-blog/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── not-found.tsx      # 404 page
│   │   └── public/            # Global styles
│   └── features/              # Feature-based modules
│       ├── Home/              # Home page components
│       │   ├── components/    # Hero, Header, etc.
│       │   ├── constants/     # Home-specific constants
│       │   ├── hooks/         # Custom hooks
│       │   ├── services/      # Data fetching
│       │   └── types/         # TypeScript types
│       └── TagsFilter/        # Tag filtering feature
│           ├── components/    # Filter UI components
│           ├── constants/     # Available tags
│           ├── hooks/         # Filter logic
│           └── test/          # Component tests
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── jest.config.ts
```

## 🚦 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **pnpm**: 11.x or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Gabo2447/dev-blog.git
   cd dev-blog
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
pnpm build
pnpm start
```

## 🧪 Testing

Run the test suite:

```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test:watch
```

## 🎨 Code Quality

Run ESLint to check code quality:

```bash
pnpm lint
```

## 📝 Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `@/*` - Root directory
- `@app/*` - Application directory (`src/app/`)
- `@feature/*` - Features directory (`src/features/`)

Example:

```typescript
import Header from "@feature/Home/components/header";
import "@app/public/global.css";
```

## 🏗️ Architecture

This project follows a **feature-based architecture** where each feature is self-contained with its own:

- **Components**: React components specific to the feature
- **Constants**: Feature-specific constants and configuration
- **Hooks**: Custom React hooks for feature logic
- **Services**: Data fetching and business logic
- **Types**: TypeScript type definitions
- **Tests**: Unit and integration tests

This approach promotes:

- ✅ Better code organization
- ✅ Easier testing and maintenance
- ✅ Clear separation of concerns
- ✅ Improved scalability

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Gabo2447**

- GitHub: [@Gabo2447](https://github.com/Gabo2447)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Font: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

---

Made with ❤️ by Gabo2447

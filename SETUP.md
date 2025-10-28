# Solutions+ AI Newsletter - Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Angular CLI**: v18.0.0 or higher

## 🔧 Installation Steps

### 1. Install Angular CLI (if not already installed)

```bash
npm install -g @angular/cli@18
```

### 2. Install Project Dependencies

Navigate to the project directory and run:

```bash
npm install
```

This will install all required dependencies including:
- Angular framework packages
- TypeScript
- RxJS
- Development tools

### 3. Verify Installation

Check that everything is installed correctly:

```bash
ng version
```

You should see Angular CLI and Angular version information.

## 🚀 Running the Application

### Development Server

Start the development server:

```bash
npm start
```

Or using Angular CLI directly:

```bash
ng serve
```

The application will be available at:
```
http://localhost:4200
```

The app will automatically reload if you change any of the source files.

### Production Build

To build the project for production:

```bash
npm run build
```

Or:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure Overview

```
newsletter/
├── src/
│   ├── app/
│   │   ├── components/          # All UI components
│   │   │   ├── home/           # Main landing page
│   │   │   ├── hero/           # Hero section
│   │   │   ├── navbar/         # Navigation
│   │   │   ├── footer/         # Footer
│   │   │   ├── section-global-news/
│   │   │   ├── section-updates/
│   │   │   ├── section-deals/
│   │   │   └── article/        # Article detail page
│   │   ├── data/               # JSON data files
│   │   │   ├── global-news.json
│   │   │   ├── updates.json
│   │   │   └── deals.json
│   │   ├── animations.ts       # Animation definitions
│   │   ├── app.routes.ts       # Routing configuration
│   │   └── app.component.ts    # Root component
│   ├── assets/                 # Static assets
│   ├── index.html             # Main HTML file
│   ├── main.ts                # Application entry point
│   └── styles.scss            # Global styles
├── angular.json               # Angular configuration
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Documentation
```

## 🎨 Customization Guide

### Adding New Articles

1. **Choose the appropriate data file**:
   - `src/app/data/global-news.json` - For global AI news
   - `src/app/data/updates.json` - For Solutions+ updates
   - `src/app/data/deals.json` - For deals and partnerships

2. **Add your article data**:
```json
{
  "id": "unique-article-id",
  "category": "Category Name",
  "title": "Your Article Title",
  "image": "https://example.com/image.jpg",
  "summary": "Brief summary for preview",
  "content": "Full article content with multiple paragraphs separated by \\n\\n",
  "date": "October 2025",
  "readTime": "5 min read"
}
```

3. **Save the file** - The changes will be reflected immediately in development mode.

### Modifying Colors

Edit `src/styles.scss` and update the CSS variables:

```scss
:root {
  --violet-deep: #4C1D95;
  --violet-mid: #9333EA;
  --violet-light: #A855F7;
  // ... other variables
}
```

### Changing Typography

Update the font family in `src/styles.scss`:

```scss
:root {
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

## 🐛 Troubleshooting

### Port Already in Use

If port 4200 is already in use, specify a different port:

```bash
ng serve --port 4300
```

### Module Not Found Errors

Clear the Angular cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Ensure you're using TypeScript 5.4.x:

```bash
npm install typescript@~5.4.0 --save-dev
```

### Build Errors

Clear the Angular build cache:

```bash
rm -rf .angular/cache
ng build
```

## 📱 Testing Responsive Design

### Browser DevTools

1. Open the application in your browser
2. Press `F12` or right-click and select "Inspect"
3. Click the device toolbar icon (or press `Ctrl+Shift+M`)
4. Select different device presets to test responsiveness

### Recommended Test Devices

- **Desktop**: 1920x1080, 1440x900
- **Tablet**: iPad (768x1024), iPad Pro (1024x1366)
- **Mobile**: iPhone 12 (390x844), Samsung Galaxy S21 (360x800)

## 🚢 Deployment

### Deploy to Production Server

1. Build the production version:
```bash
npm run build
```

2. The `dist/solutions-plus-newsletter` folder contains all static files

3. Upload these files to your web server or hosting platform

### Deploy to Cloud Platforms

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist/solutions-plus-newsletter
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize and deploy
firebase init hosting
firebase deploy
```

## 🔒 Environment Variables

For production deployments, you may want to use environment variables:

1. Create `src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.solutionsplus.com'
};
```

2. Update `angular.json` to use file replacements for production builds.

## 📊 Performance Optimization

### Lazy Loading

The current setup uses standalone components. To implement lazy loading:

```typescript
// In app.routes.ts
export const routes: Routes = [
  {
    path: 'article/:id',
    loadComponent: () => import('./components/article/article.component')
      .then(m => m.ArticleComponent)
  }
];
```

### Image Optimization

- Use WebP format for images
- Implement lazy loading for images
- Use appropriate image sizes for different devices

## 🆘 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Angular documentation: https://angular.io/docs
3. Contact the Solutions+ AI Team

## 🎉 You're Ready!

Your Solutions+ AI Newsletter landing page is now set up and ready to use. Start the development server and begin customizing!

```bash
npm start
```

Visit `http://localhost:4200` to see your beautiful landing page in action!






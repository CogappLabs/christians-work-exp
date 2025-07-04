# Fish or Foe Game

A web-based quiz game about sustainable seafood choices, created for the Monterey Bay Aquarium.

## GitHub Pages Setup

This folder is structured for GitHub Pages hosting. To deploy:

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/docs" folder
6. Click "Save"

Your site will be available at: `https://[username].github.io/[repository-name]/`

## Development Setup

This project uses Biome for linting and formatting. To get started:

```bash
cd docs

# Use the correct Node.js version (if using nvm)
nvm use

# Install dependencies
npm install
```

### Available Scripts

- `npm run lint` - Check for linting issues
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Check formatting
- `npm run format:fix` - Fix formatting automatically
- `npm run check` - Run both linting and formatting checks
- `npm run check:fix` - Fix both linting and formatting issues

### Notes

- Biome is configured to only work within the `docs` directory
- The `original` folder is completely ignored by the linter
- Configuration is in `biome.json`

## Game Structure

- **index.html** - Main menu and game introduction
- **quiz.html** - Quiz interface with fish images and multiple choice questions
- **results.html** - Final score display
- **displayInfo.html** - Information display between questions
- **css/main.css** - Shared styles
- **js/MainCode.js** - Game logic and functionality
- **images/** - All fish images and background photos

## How to Play

1. Click "Click this to start" on the main page
2. Look at the fish image and read its details
3. Choose whether the fish is a "Best Choice", "Certified", "Good Alternative", or "Avoid"
4. Learn more about each fish after making your choice
5. Get your final score at the end

The game teaches sustainable seafood choices based on the Monterey Bay Aquarium's Seafood Watch program.


# NextUI Turbo Starter Pack

## Introduction
"NextUI Turbo" is a turbo repository starter pack that integrates the robust UI capabilities of [NextUI](https://nextui.org) with the versatility of the [T3 Turbo starter](https://create.t3.gg/). This starter pack is ideal for developers looking to leverage the power of NextUI components in a scalable, efficient development environment.

## Installation
The steps below will get you up and running, if you would like more details on how this works please refer to the [T3 Turbo Installation](https://github.com/t3-oss/create-t3-turbo#installation).

### Initializing the Project
You can start using NextUI Turbo by either cloning this repository. 

```bash
# Install dependencies
pnpm i

# Configure environment variables
# Use the provided `.env.example` in the root directory as a reference
cp .env.example .env

# Push the Drizzle schema to the database
pnpm db:push
```

## Web-UI Package with NextUI Components

### Overview
The web-ui package is a core component of the NextUI Turbo starter pack. It utilizes NextUI components, offering a wide range of ready-to-use, customizable UI elements tailored for rapid and responsive web development.

### Integration
The web-ui package is seamlessly integrated into the starter pack, ensuring consistency and efficiency across the development process. It includes:

- Pre-configured NextUI components
- Shareable NextUI provider is exported from the package
- Shareable tailwind config is being exported from the package

## Project Structure
The NextUI Turbo project includes the following structure:

```text
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ auth-proxy
  |   ├─ Nitro server to proxy OAuth requests in preview deployments
  |   └─ Uses Auth.js Core
  ├─ expo
  |   ├─ Expo SDK 49
  |   ├─ React Native using React 18
  |   ├─ Navigation using Expo Router
  |   ├─ Tailwind using Nativewind
  |   └─ Typesafe API calls using tRPC
  └─ next.js
      ├─ Next.js 14
      ├─ React 18
      ├─ Tailwind CSS
      └─ E2E Typesafe API Server & Client
packages
  ├─ api
  |   └─ tRPC v10 router definition
  ├─ auth
  |   └─ Authentication using next-auth. **NOTE: Only for Next.js app, not Expo**
  ├─ db
  |   └─ Typesafe db calls using Drizzle & Planetscale
  └─ web-ui
      └─ NextUI components for UI design
tooling
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ prettier
  |   └─ shared prettier configuration
  ├─ tailwind
  |   └─ shared tailwind configuration
  └─ typescript
      └─ shared tsconfig you can extend from

```

### Usage
To use the web-ui package in your application:

1. Import the desired NextUI components in your project files.
2. Customize the components using the available props and theming options.
3. Integrate with existing or new pages within the Next.js application structure.


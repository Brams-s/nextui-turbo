
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
.vscode
apps
  ├─ auth-proxy
  ├─ expo
  └─ next.js
packages
  ├─ api
  ├─ auth
  ├─ db
  └─ web-ui     # Newly added package with NextUI components
tooling
  ├─ eslint
  ├─ prettier
  ├─ tailwind
  └─ typescript
```

### Usage
To use the web-ui package in your application:

1. Import the desired NextUI components in your project files.
2. Customize the components using the available props and theming options.
3. Integrate with existing or new pages within the Next.js application structure.


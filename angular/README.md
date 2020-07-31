

## Workshop Setup

First, we recommend that you star this repo so you get notifications of any future updates.

The required software for this workshop is:

1. Git
2. Node.js and npm
3. A clone of this repository and it's dependencies

### macOS

We chose to list the macOS instructions first, but only for alphabetical reasons. 😁

1. Git should already be installed. You should verify this by opening the terminal (Applications > Utilities > Terminal) and running the following command:

```bash
git --version
```

This should indicate the version of Git that is installed on your machine.

2. We recommend installing Node.js and npm using homebrew. Homebrew is a package manager for macOS, and it simplifies installing packages like node.

If you do not have homebrew installed, you can install homebrew by executing the following in your terminal (Applications > Utilities > Terminal):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

After installing homebrew, run the following in your terminal to install the latest stable version of Node.js and npm:

```bash
brew update
brew install node
```

Verify that node was installed via the following command:

```bash
node -v
```

Verify that npm was installed via the following command:

```bash
npm -v
```

3. Finally, clone this repository locally and install the necessary dependencies.

When you run the following clone command a directory named "thinkster" will be created in your current working directory. You will need to change the current working directory in the terminal to the thinkster/angular directory using the `cd` command: http://www.linfo.org/cd.html.

```bash
git clone https://github.com/ag-grid/thinkster.git
cd thinkster/angular
npm install
```

The first command clones the repository, then we change directory into the newly created "thinkster" directory and then into the "angular" subdirectory, and finally, we run the `npm install` command to install all of the necessary dependencies.

### Windows

1. Windows does not have Git installed by default. First, check if you already have the Git installed by checking your applications for "Gitbash".

If the "Git Bash" application is not installed, go to [https://gitforwindows.org](https://gitforwindows.org) and download the installer.

More advanced users _may_ wish to use Chocolatey, a package manager for windows, to install Git: [https://chocolatey.org/packages/git](https://chocolatey.org/packages/git). Note, if you are new to the terminal environment, and using package managers in a terminal, we do _not_ suggest you use Chocolatey. The link to gitforwindows.org above is your best bet.

2. Next, install Node version 12 from [https://nodejs.org](https://nodejs.org)

3. Finally, use the "Git Bash" application (not the native command prompt application) to clone the repository and install the necessary dependencies. When you run the following clone command a directory named "angular-fundamentals" will be created in your current working directory. If you want to change to another directory to place this folder, use the `cd` command: http://www.linfo.org/cd.html

Open Git Bash and run the following commands at the prompt:

```bash
git clone https://github.com/ag-grid/thinkster.git
cd thinkster/angular
npm install
```

## Verify Installation

Verify the project installation by executing the following command in the terminal on macOS or in Git Bash on Windows:

```bash
npm start
```

Then open up a browser and browse to http://localhost:4200 and make sure that the website is running.

#!/bin/bash

# GitHub Pages Setup Script for Job Search Tracker
# This script helps you deploy your app to GitHub Pages

echo "🚀 Job Search Tracker - GitHub Pages Setup"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found."
    echo "Please run this script from the MihirJobSearch directory."
    exit 1
fi

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed."
    echo "Please install Git first: https://git-scm.com/downloads"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed."
    echo "Please install Node.js and npm first: https://nodejs.org/"
    exit 1
fi

echo "✅ Prerequisites check passed!"
echo ""

# Prompt for GitHub username
read -p "Enter your GitHub username: " github_username

if [ -z "$github_username" ]; then
    echo "❌ Error: GitHub username is required."
    exit 1
fi

# Prompt for repository name (default: MihirJobSearch)
read -p "Enter repository name [MihirJobSearch]: " repo_name
repo_name=${repo_name:-MihirJobSearch}

echo ""
echo "📋 Configuration:"
echo "   GitHub Username: $github_username"
echo "   Repository Name: $repo_name"
echo "   Future URL: https://github.com/$github_username/$repo_name/"
echo ""

read -p "Is this correct? (y/n): " confirm
if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "Setup cancelled."
    exit 0
fi

echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error: npm install failed."
    exit 1
fi

echo ""
echo "✅ Dependencies installed!"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo ""
    echo "🔧 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Job Search Tracker"
fi

# Check if remote exists
if git remote | grep -q "origin"; then
    echo ""
    echo "ℹ️  Remote 'origin' already exists. Checking URL..."
    current_remote=$(git remote get-url origin)
    expected_remote="https://github.com/$github_username/$repo_name.git"
    
    if [ "$current_remote" != "$expected_remote" ]; then
        echo "⚠️  Current remote: $current_remote"
        echo "   Expected remote: $expected_remote"
        read -p "Update remote URL? (y/n): " update_remote
        if [ "$update_remote" = "y" ] || [ "$update_remote" = "Y" ]; then
            git remote set-url origin "$expected_remote"
            echo "✅ Remote URL updated!"
        fi
    fi
else
    echo ""
    echo "🔗 Adding GitHub remote..."
    git remote add origin "https://github.com/$github_username/$repo_name.git"
    echo "✅ Remote added!"
fi

echo ""
echo "📤 Pushing to GitHub..."
echo ""
echo "⚠️  IMPORTANT: You need to create the repository on GitHub first!"
echo "   1. Go to: https://github.com/new"
echo "   2. Repository name: $repo_name"
echo "   3. Make it PRIVATE (to protect job search data)"
echo "   4. DO NOT initialize with README"
echo "   5. Click 'Create repository'"
echo ""

read -p "Have you created the repository on GitHub? (y/n): " repo_created
if [ "$repo_created" != "y" ] && [ "$repo_created" != "Y" ]; then
    echo ""
    echo "Please create the repository first, then run this script again."
    echo "Or manually run: git push -u origin main"
    exit 0
fi

echo ""
echo "Pushing to GitHub..."
git push -u origin main

if [ $? -ne 0 ]; then
    echo ""
    echo "⚠️  Push failed. This might be because:"
    echo "   1. Repository doesn't exist on GitHub"
    echo "   2. You don't have permission"
    echo "   3. Authentication is required"
    echo ""
    echo "Try running: git push -u origin main"
    exit 1
fi

echo ""
echo "✅ Code pushed to GitHub!"

echo ""
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Go to: https://github.com/$github_username/$repo_name/settings/pages"
echo "2. Under 'Source', select branch: gh-pages"
echo "3. Click 'Save'"
echo "4. Wait 1-2 minutes"
echo "5. Visit: https://$github_username.github.io/$repo_name/"
echo ""
echo "🎉 Your Job Search Tracker will be live!"
echo ""
echo "📱 Share this URL with your family:"
echo "   https://$github_username.github.io/$repo_name/"
echo ""
echo "📚 For more help, see GITHUB_PAGES_SETUP.md"
echo ""

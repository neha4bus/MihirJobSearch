# GitHub Storage Setup Guide

This application stores job tracking data in a JSON file that can be committed to GitHub, enabling multiple users to collaborate and keep data synchronized.

## Setup Instructions

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Job Search Tracker"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `job-search-tracker` or `mihir-job-search`
3. Choose **Private** if you want to keep your job search data confidential
4. Do NOT initialize with README, .gitignore, or license (we already have these)

### 3. Connect Local Repository to GitHub

```bash
# Replace YOUR_USERNAME and YOUR_REPO with your actual GitHub username and repository name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## How Data Storage Works

### Data File
- All job data is stored in `jobs-data.json` in the repository root
- This file is automatically created when you add your first job
- The file is tracked by Git and can be committed to GitHub

### Workflow for Single User

1. Make changes in the app (add/edit/delete jobs)
2. The data is automatically saved to `jobs-data.json`
3. Commit and push your changes:
   ```bash
   git add jobs-data.json
   git commit -m "Updated job applications"
   git push
   ```

### Workflow for Multiple Users

#### User 1 (e.g., Your Son)
1. Make changes in the app
2. Commit and push:
   ```bash
   git add jobs-data.json
   git commit -m "Added new applications"
   git push
   ```

#### User 2 (e.g., Parent)
1. Before making changes, pull latest data:
   ```bash
   git pull
   ```
2. Refresh the browser to load the latest data
3. Make changes in the app
4. Commit and push:
   ```bash
   git add jobs-data.json
   git commit -m "Updated referral information"
   git push
   ```

### Handling Merge Conflicts

If two people edit the same job simultaneously, Git may report a merge conflict in `jobs-data.json`:

1. Pull the latest changes:
   ```bash
   git pull
   ```

2. If there's a conflict, Git will mark the conflicting sections in `jobs-data.json`

3. **Option A - Use Import/Export Feature:**
   - Export your local changes (Download button in the app)
   - Resolve the Git conflict by accepting the remote version:
     ```bash
     git checkout --theirs jobs-data.json
     ```
   - Refresh the browser
   - Import your exported file and manually merge any differences
   - Commit and push

4. **Option B - Manual Resolution:**
   - Open `jobs-data.json` in a text editor
   - Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Manually edit to keep the desired changes
   - Remove conflict markers
   - Save the file
   ```bash
   git add jobs-data.json
   git commit -m "Resolved merge conflict"
   git push
   ```

## Best Practices

### Communication
- Use the "Added By" field to identify who added each job
- Communicate with other users before making bulk changes
- Use descriptive commit messages

### Timing
- **Pull before you start working** to get the latest data
- **Push after each session** to share your updates
- Avoid working on the same jobs simultaneously

### Backup
- Use the Export button regularly to create backup copies
- Keep exported files outside the repository
- GitHub itself serves as a backup with full history

### Commit Messages Examples
```bash
git commit -m "Added 5 new job applications"
git commit -m "Updated referral status for Microsoft positions"
git commit -m "Marked Google SWE role as applied"
git commit -m "Added interview dates for Amazon"
git commit -m "Updated final outcomes for completed applications"
```

## Setting Up Automatic Sync (Optional)

### Using Git Hooks
You can set up automatic commits when data changes. Create `.git/hooks/post-checkout`:

```bash
#!/bin/bash
# Automatically pull latest data after checkout
if [ -f "jobs-data.json" ]; then
    echo "Loading latest job data..."
fi
```

### Using Cron Jobs (Mac/Linux)
Set up automatic pulls every hour:

```bash
# Edit crontab
crontab -e

# Add this line (adjust path to your repository)
0 * * * * cd /path/to/MihirJobSearch && git pull --quiet
```

## Troubleshooting

### Problem: Changes not showing up for other users
**Solution:** 
1. Make sure you committed and pushed your changes
2. Other users need to pull and refresh their browser

### Problem: Lost local changes
**Solution:** 
1. Check if you exported a backup
2. Check Git history: `git log`
3. Restore previous version: `git checkout <commit-hash> jobs-data.json`

### Problem: Repository is too large
**Solution:** 
- The JSON file should remain small (< 1MB for thousands of jobs)
- If it grows large, consider archiving old jobs to a separate file
- Use Git LFS for large files if needed

## Security Considerations

### Private Repository
- Always use a **private** repository for job search data
- Contains sensitive information (salary expectations, contacts, notes)

### Access Control
- Only invite trusted collaborators
- Use GitHub's permission settings to control who can push changes

### Sensitive Data
- Avoid storing passwords or highly sensitive personal information
- Use the notes fields for contacts but consider privacy implications
- Remember that Git history preserves all past data

## GitHub Desktop Alternative

If you prefer a GUI instead of command line:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your repository through the app
3. The app will show you when `jobs-data.json` has changed
4. Write a commit message and click "Commit to main"
5. Click "Push origin" to sync with GitHub
6. Click "Fetch origin" and "Pull" to get updates from others

This makes the Git workflow much more visual and user-friendly!

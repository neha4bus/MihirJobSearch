# Job Search Tracker

A modern, Kanban-style job application tracking system designed to streamline the job search process from initial review to final offer. Built for collaborative use with family members or mentors, with GitHub-based data storage for seamless synchronization across users.

![Job Search Tracker](https://img.shields.io/badge/React-18.2-blue) ![Vite](https://img.shields.io/badge/Vite-4.4-purple) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 📋 Comprehensive Job Tracking
- **7-Stage Kanban Board**: Visual workflow from initial review to final outcome
- **Detailed Job Cards**: Track all relevant information for each application
- **Drag-and-Drop Interface**: Easily move jobs between stages
- **Priority Levels**: Mark jobs as high, medium, or low priority
- **Custom Tags**: Organize jobs with flexible tagging system

### 🔄 Complete Workflow Support
1. **Initial Review** - Assess if the job is suitable
2. **Referral Check** - Track referral contacts and status
3. **Cold Email Prep** - Compose and track personalized outreach emails
4. **Applied** - Record application submission details
5. **Follow-up** - Schedule and document follow-up actions
6. **Interview** - Track multiple interview rounds with dates and notes
7. **Final Outcome** - Record offers, rejections, or other outcomes

### 👥 Multi-User Collaboration
- **GitHub Integration**: Store data in version-controlled JSON file
- **Multiple Contributors**: Family members can help track applications
- **Change History**: Full Git history of all modifications
- **Conflict Resolution**: Tools and guides for handling simultaneous edits
- **User Attribution**: "Added By" field identifies who created each entry

### 🔍 Search & Filter
- **Real-time Search**: Find jobs by company, position, or location
- **Priority Filtering**: Focus on high-priority opportunities
- **Statistics Dashboard**: View total and filtered job counts

### 💾 Data Management
- **Auto-save**: All changes automatically saved to browser storage
- **Export/Import**: Download data as JSON for GitHub commits
- **Backup Support**: Easy data export for backup purposes
- **Cross-device Sync**: Use GitHub to access data from multiple computers

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git** (for GitHub storage)
- A **GitHub account** (for multi-user collaboration)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd MihirJobSearch
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The app will be running at `http://localhost:5173`
   - The terminal will show the exact URL

### First-Time Setup

When you first open the application:

1. **Explore the Interface**: Familiarize yourself with the 7 columns representing different stages
2. **Add Your First Job**: Click the "Add Job" button in the header
3. **Review GitHub Guide**: Click the "GitHub Guide" button to learn about data storage
4. **Set Up GitHub Storage**: Follow the guide to enable multi-user collaboration

## 📖 Usage Guide

### Adding a New Job

1. Click the **"Add Job"** button in the header
2. Fill in the basic information (company and position are required)
3. Set the priority level and current stage
4. Add any stage-specific information (suitability, referrals, etc.)
5. Click **"Add Job"** to save

### Moving Jobs Through Stages

**Drag and Drop Method:**
- Click and hold on any job card
- Drag it to a different column
- Release to drop it in the new stage

**Edit Method:**
- Click the edit icon (✏️) on any job card
- Change the "Current Stage" dropdown
- Save your changes

### Tracking Your Process

#### Initial Review Stage
- Mark whether the job is suitable
- Add notes explaining your assessment
- Consider: skills match, location, company culture

#### Referral Check Stage
- Indicate if you have a referral
- Record referral contact information
- Track referral status and communications

#### Cold Email Prep Stage
- Store your personalized email content
- Track email recipients
- Record when emails were sent
- Keep copies of outreach messages

#### Applied Stage
- Record the application date
- Note the application method (company website, LinkedIn, etc.)
- Track confirmation emails or application IDs

#### Follow-up Stage
- Schedule follow-up dates
- Document follow-up actions taken
- Track responses received

#### Interview Stage
- Add multiple interview dates for different rounds
- Record notes from each interview
- Track interviewers and questions asked

#### Final Outcome Stage
- Mark the final result (offer, rejection, etc.)
- Add detailed notes about offers or reasons
- Keep this for future reference

### Using Search and Filters

**Search Box:**
- Type company name, position, or location
- Results update in real-time
- Search is case-insensitive

**Priority Filter:**
- Select "All Priorities" to see everything
- Choose "High", "Medium", or "Low" to filter
- Combines with search for precise results

### Editing and Deleting Jobs

**To Edit:**
- Click the edit icon (✏️) on any job card
- Modify any information
- Click "Update Job" to save

**To Delete:**
- Click the trash icon (🗑️) on any job card
- Confirm the deletion
- **Warning**: This action cannot be undone!

### Exporting and Importing Data

**Export:**
1. Click the **"Export"** button in the header
2. Save the `jobs-data.json` file
3. Use this for backups or GitHub commits

**Import:**
1. Click the **"Import"** button in the header
2. Select a `jobs-data.json` file
3. Confirm to replace current data
4. **Warning**: This overwrites all current data!

## 🤝 Multi-User Collaboration

### Setting Up GitHub Storage

See the detailed [GitHub Setup Guide](./GITHUB_SETUP.md) or click the **"GitHub Guide"** button in the app for comprehensive instructions.

**Quick Overview:**

1. **Create a private GitHub repository**
2. **Connect your local project to GitHub**
3. **Commit and push the initial data**
4. **Invite collaborators** (family members, mentors)
5. **Establish a workflow** for synchronization

### Daily Workflow for Multiple Users

**Before You Start:**
```bash
git pull
```
Then refresh your browser to load the latest data.

**After Making Changes:**
1. Click "Export" and save `jobs-data.json`
2. In terminal:
```bash
git add jobs-data.json
git commit -m "Updated job applications"
git push
```

### Best Practices for Teams

✅ **Do:**
- Pull before starting work
- Use descriptive commit messages
- Fill in the "Added By" field
- Communicate about major changes
- Export data regularly as backup

❌ **Don't:**
- Work on the same jobs simultaneously
- Force push without coordination
- Skip pulling before making changes
- Ignore merge conflicts

## 🎨 Customization

### Adding Custom Tags

Tags help organize jobs by category:
- Technology: "React", "Python", "AI/ML"
- Work Type: "Remote", "Hybrid", "On-site"
- Level: "Senior", "Mid-level", "Junior"
- Industry: "Fintech", "Healthcare", "E-commerce"

### Priority Levels

Use priority to focus your efforts:
- **High**: Dream jobs, urgent deadlines, strong referrals
- **Medium**: Good fits, standard timeline
- **Low**: Backup options, exploratory applications

## 🏗️ Project Structure

```
MihirJobSearch/
├── src/
│   ├── components/
│   │   ├── KanbanBoard.jsx      # Main board component
│   │   ├── JobCard.jsx           # Individual job cards
│   │   ├── JobForm.jsx           # Add/edit job form
│   │   └── GitHubGuide.jsx       # In-app GitHub guide
│   ├── hooks/
│   │   └── useJobs.js            # Job data management hook
│   ├── types/
│   │   └── job.js                # Job data model and types
│   ├── utils/
│   │   └── storage.js            # Storage utilities
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── jobs-data.json                # Job data (tracked by Git)
├── package.json                  # Project dependencies
├── vite.config.js                # Vite configuration
├── GITHUB_SETUP.md               # Detailed GitHub guide
└── README.md                     # This file
```

## 🛠️ Technology Stack

- **React 18.2** - UI framework
- **Vite 4.4** - Build tool and dev server
- **@hello-pangea/dnd** - Drag-and-drop functionality
- **lucide-react** - Icon library
- **date-fns** - Date formatting
- **Git & GitHub** - Version control and collaboration

## 📱 Browser Support

Works best in modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (responsive design)

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory. You can deploy these to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 💡 Tips for Success

### Job Search Strategy
1. **Consistent Updates**: Update your board daily or after each action
2. **Prioritize Ruthlessly**: Focus energy on high-priority opportunities
3. **Document Everything**: Notes are invaluable for interview prep
4. **Track Patterns**: Notice which types of jobs respond best
5. **Stay Organized**: Use tags and priorities effectively

### Using Cold Email Templates
- Save successful email templates in the cold email field
- Personalize for each recipient but keep a base structure
- Track response rates to improve your messaging
- Reference the job description when customizing

### Interview Preparation
- Review all job details before interviews
- Check your notes from previous rounds
- Update interview notes immediately after each round
- Track questions asked for pattern recognition

### Data Hygiene
- Export data weekly as backup
- Archive completed jobs periodically
- Keep tags consistent
- Review and update stale applications

## 🐛 Troubleshooting

### App Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Data Not Persisting
- Check browser console for errors
- Verify localStorage is enabled
- Try exporting and re-importing data
- Check browser privacy settings

### GitHub Sync Issues
- Ensure you've pulled latest changes: `git pull`
- Check for merge conflicts in `jobs-data.json`
- Verify you've exported data before committing
- See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for conflict resolution

### Jobs Not Moving Between Columns
- Refresh the browser
- Check browser console for errors
- Try editing the job and changing stage manually
- Export data, refresh, and import if needed

## 🤔 FAQ

**Q: Is my data private?**
A: Yes, if you use a private GitHub repository. Data is stored locally in your browser and optionally in your private GitHub repo.

**Q: Can I use this without GitHub?**
A: Yes! The app works perfectly without GitHub. You'll only miss multi-user sync capabilities.

**Q: How many jobs can I track?**
A: Thousands! The app is designed to handle large numbers of applications efficiently.

**Q: Can I customize the stages?**
A: The current version has fixed stages, but you can skip stages you don't need. Custom stages would require code modifications.

**Q: What if I lose my data?**
A: Regular exports and GitHub commits ensure you have backups. GitHub keeps full version history.

**Q: Can I access this on mobile?**
A: Yes! The interface is responsive and works on tablets and phones, though desktop is recommended for heavy use.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with love to help streamline the job search process. Good luck with your applications!

## 📞 Support

For issues or questions:
- Check the [GitHub Setup Guide](./GITHUB_SETUP.md)
- Click the "GitHub Guide" button in the app
- Review this README
- Check browser console for error messages

---

**Made with ❤️ for job seekers everywhere**

*Remember: Job searching is a numbers game combined with strategy. Stay organized, stay persistent, and success will follow!*

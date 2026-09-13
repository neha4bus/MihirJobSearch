/**
 * Storage utilities for managing job data
 * Data is stored in localStorage and can be exported/imported as JSON for GitHub storage
 */

const STORAGE_FILE = 'jobs-data.json';
const LOCAL_STORAGE_KEY = 'job-tracker-data';

/**
 * Initial data structure
 */
const initialData = {
  jobs: [],
  metadata: {
    lastUpdated: new Date().toISOString(),
    version: '1.0.0',
    contributors: []
  }
};

/**
 * Load jobs from localStorage
 * In production, this data should be synced with jobs-data.json from GitHub
 */
export const loadJobs = () => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
      return initialData;
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading jobs:', error);
    return initialData;
  }
};

/**
 * Save jobs to localStorage
 * After saving, export the data and commit to GitHub for team collaboration
 */
export const saveJobs = (data) => {
  try {
    const updatedData = {
      ...data,
      metadata: {
        ...data.metadata,
        lastUpdated: new Date().toISOString()
      }
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData, null, 2));
    
    // Also save to a downloadable format for GitHub storage
    // Users should manually download and commit this file
    saveToGitHubFormat(updatedData);
    
    return true;
  } catch (error) {
    console.error('Error saving jobs:', error);
    return false;
  }
};

/**
 * Save data in a format ready for GitHub (jobs-data.json)
 * This creates a Blob that can be saved to the file system
 */
const saveToGitHubFormat = (data) => {
  try {
    // This prepares the data but doesn't auto-download
    // The user uses the Export button to download manually
    const jsonString = JSON.stringify(data, null, 2);
    // Store in sessionStorage for quick access if needed
    sessionStorage.setItem('github-export-ready', jsonString);
  } catch (error) {
    console.error('Error preparing GitHub format:', error);
  }
};

/**
 * Export data as JSON file for GitHub storage
 */
export const exportToJSON = (data) => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = STORAGE_FILE;
  link.click();
  URL.revokeObjectURL(url);
};

/**
 * Import data from JSON file
 */
export const importFromJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
};

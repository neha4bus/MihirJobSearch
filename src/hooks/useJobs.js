import { useState, useEffect, useCallback } from 'react';
import { loadJobs, saveJobs } from '../utils/storage';
import { JOB_STAGES } from '../types/job';

/**
 * Custom hook for managing job data
 */
export const useJobs = () => {
  const [data, setData] = useState({ jobs: [], metadata: {} });
  const [loading, setLoading] = useState(true);

  // Load jobs on mount
  useEffect(() => {
    const loadedData = loadJobs();
    setData(loadedData);
    setLoading(false);
  }, []);

  // Save jobs whenever data changes
  useEffect(() => {
    if (!loading) {
      saveJobs(data);
    }
  }, [data, loading]);

  // Add a new job
  const addJob = useCallback((job) => {
    setData(prevData => ({
      ...prevData,
      jobs: [...prevData.jobs, job]
    }));
  }, []);

  // Update an existing job
  const updateJob = useCallback((jobId, updates) => {
    setData(prevData => ({
      ...prevData,
      jobs: prevData.jobs.map(job =>
        job.id === jobId
          ? { ...job, ...updates, updatedAt: new Date().toISOString() }
          : job
      )
    }));
  }, []);

  // Delete a job
  const deleteJob = useCallback((jobId) => {
    setData(prevData => ({
      ...prevData,
      jobs: prevData.jobs.filter(job => job.id !== jobId)
    }));
  }, []);

  // Move job to a different stage
  const moveJob = useCallback((jobId, newStage) => {
    setData(prevData => ({
      ...prevData,
      jobs: prevData.jobs.map(job =>
        job.id === jobId
          ? { ...job, stage: newStage, updatedAt: new Date().toISOString() }
          : job
      )
    }));
  }, []);

  // Get jobs by stage
  const getJobsByStage = useCallback((stage) => {
    return data.jobs.filter(job => job.stage === stage);
  }, [data.jobs]);

  // Get all stages with jobs
  const getAllStages = useCallback(() => {
    return Object.values(JOB_STAGES).map(stage => ({
      id: stage,
      jobs: getJobsByStage(stage)
    }));
  }, [getJobsByStage]);

  // Replace all data (for import)
  const replaceData = useCallback((newData) => {
    setData(newData);
  }, []);

  return {
    jobs: data.jobs,
    metadata: data.metadata,
    loading,
    addJob,
    updateJob,
    deleteJob,
    moveJob,
    getJobsByStage,
    getAllStages,
    replaceData,
    exportData: () => data
  };
};

/**
 * Job tracking stages based on the workflow:
 * 1. Initial Review - Checking if job is suitable
 * 2. Referral Check - Looking for referrals at the company
 * 3. Cold Email Prep - Preparing personalized cold emails
 * 4. Applied - Application submitted
 * 5. Follow-up - Following up on application
 * 6. Interview - In interview process
 * 7. Offer/Rejected - Final outcome
 */

export const JOB_STAGES = {
  INITIAL_REVIEW: 'initial-review',
  REFERRAL_CHECK: 'referral-check',
  COLD_EMAIL_PREP: 'cold-email-prep',
  APPLIED: 'applied',
  FOLLOW_UP: 'follow-up',
  INTERVIEW: 'interview',
  FINAL: 'final'
};

export const STAGE_LABELS = {
  [JOB_STAGES.INITIAL_REVIEW]: 'Initial Review',
  [JOB_STAGES.REFERRAL_CHECK]: 'Referral Check',
  [JOB_STAGES.COLD_EMAIL_PREP]: 'Cold Email Prep',
  [JOB_STAGES.APPLIED]: 'Applied',
  [JOB_STAGES.FOLLOW_UP]: 'Follow-up',
  [JOB_STAGES.INTERVIEW]: 'Interview',
  [JOB_STAGES.FINAL]: 'Offer/Rejected'
};

export const STAGE_COLORS = {
  [JOB_STAGES.INITIAL_REVIEW]: '#94a3b8',
  [JOB_STAGES.REFERRAL_CHECK]: '#60a5fa',
  [JOB_STAGES.COLD_EMAIL_PREP]: '#a78bfa',
  [JOB_STAGES.APPLIED]: '#fbbf24',
  [JOB_STAGES.FOLLOW_UP]: '#fb923c',
  [JOB_STAGES.INTERVIEW]: '#34d399',
  [JOB_STAGES.FINAL]: '#e879f9'
};

/**
 * Creates a new job object
 */
export const createJob = ({
  company = '',
  position = '',
  jobUrl = '',
  jobDescription = '',
  location = '',
  salary = '',
  isSuitable = null,
  suitabilityNotes = '',
  hasReferral = null,
  referralContact = '',
  referralNotes = '',
  coldEmailSent = false,
  coldEmailDate = null,
  coldEmailContent = '',
  coldEmailRecipients = [],
  appliedDate = null,
  applicationMethod = '',
  followUpDate = null,
  followUpNotes = '',
  interviewDates = [],
  interviewNotes = '',
  finalOutcome = null,
  finalNotes = '',
  priority = 'medium',
  addedBy = 'User',
  tags = []
} = {}) => ({
  id: `job-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  company,
  position,
  jobUrl,
  jobDescription,
  location,
  salary,
  stage: JOB_STAGES.INITIAL_REVIEW,
  
  // Initial Review stage
  isSuitable,
  suitabilityNotes,
  
  // Referral Check stage
  hasReferral,
  referralContact,
  referralNotes,
  
  // Cold Email Prep stage
  coldEmailSent,
  coldEmailDate,
  coldEmailContent,
  coldEmailRecipients,
  
  // Applied stage
  appliedDate,
  applicationMethod,
  
  // Follow-up stage
  followUpDate,
  followUpNotes,
  
  // Interview stage
  interviewDates,
  interviewNotes,
  
  // Final stage
  finalOutcome,
  finalNotes,
  
  // Metadata
  priority,
  addedBy,
  tags,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
});

/**
 * Priority levels for jobs
 */
export const PRIORITY_LEVELS = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
};

/**
 * Final outcomes
 */
export const FINAL_OUTCOMES = {
  OFFER_ACCEPTED: 'offer-accepted',
  OFFER_DECLINED: 'offer-declined',
  REJECTED: 'rejected',
  WITHDRAWN: 'withdrawn',
  GHOSTED: 'ghosted'
};

export const OUTCOME_LABELS = {
  [FINAL_OUTCOMES.OFFER_ACCEPTED]: 'Offer Accepted',
  [FINAL_OUTCOMES.OFFER_DECLINED]: 'Offer Declined',
  [FINAL_OUTCOMES.REJECTED]: 'Rejected',
  [FINAL_OUTCOMES.WITHDRAWN]: 'Withdrawn',
  [FINAL_OUTCOMES.GHOSTED]: 'Ghosted'
};

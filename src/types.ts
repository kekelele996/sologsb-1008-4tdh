export type ReviewStatus = "draft" | "pending" | "confirmed" | "changes";

export interface Reply {
  id: string;
  author: string;
  body: string;
  createdAt: string;
}

export interface ReviewComment {
  id: string;
  author: string;
  body: string;
  createdAt: string;
  resolved: boolean;
  replies: Reply[];
}

export interface TermBinding {
  id: string;
  source: string;
  target: string;
  required: boolean;
  confirmed: boolean;
}

export interface VersionSnapshot {
  id: string;
  label: string;
  createdAt: string;
  sourceText: string;
  targetText: string;
  status: ReviewStatus;
  terms: TermBinding[];
}

export interface SignItem {
  id: string;
  code: string;
  sourceText: string;
  targetLanguage: string;
  targetText: string;
  scenario: string;
  regulation: string;
  status: ReviewStatus;
  terms: TermBinding[];
  comments: ReviewComment[];
  versions: VersionSnapshot[];
  emergencyRevision: boolean;
  updatedAt: string;
}

export interface EmergencyBatchEntry {
  signId: string;
  code: string;
  sourceText: string;
  originalStatus: ReviewStatus;
  originalTargetText: string;
  snapshotSavedAt: string | null;
  finalStatus: ReviewStatus | null;
  finalTargetText: string | null;
}

export interface EmergencyBatch {
  id: string;
  incidentNo: string;
  reason: string;
  createdAt: string;
  closedAt: string | null;
  entries: EmergencyBatchEntry[];
}

export interface SignProject {
  id: string;
  title: string;
  location: string;
  activeSignId: string;
  signs: SignItem[];
  batches: EmergencyBatch[];
  updatedAt: string;
}

export interface PersistedProject {
  schema: 1;
  project: SignProject;
}

export interface DiffToken {
  type: "same" | "add" | "remove";
  value: string;
}

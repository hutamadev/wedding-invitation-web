export type AttendanceStatus = 'attending' | 'not_attending' | 'tentative';

export interface GuestbookMessage {
  id: string;
  name: string;
  relation?: string;
  message: string;
  attendance?: AttendanceStatus;
  createdAt: string;
  timeAgo?: string;
}

export interface GuestbookFormData {
  name: string;
  relation?: string;
  message: string;
  attendance?: AttendanceStatus;
}

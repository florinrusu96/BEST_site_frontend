export interface Event {
  id?: number;
  event_name: string;
  event_description: string;
  event_background?: string;
  event_pictures?: [];
  event_partners?: [];
  event_google_form?: string;
}

export type AppName =
  | 'Facebook'
  | 'Google'
  | 'Spotify'
  | 'WhatsApp'
  | 'Docs'
  | 'Slides'
  | 'Sheets'
  | 'Forms';

export const FOLDER_APPS: Record<number, AppName[]> = {
  1: [
    'Facebook', 'Spotify', 'Google', 'Docs',
    'WhatsApp', 'Slides', 'Forms', 'Sheets',
    'Google', 'Facebook', 'Docs', 'Spotify',
    'Forms', 'Sheets', 'WhatsApp', 'Slides',
    'Spotify', 'Docs', 'Google', 'Facebook',
    'Sheets', 'Slides', 'Forms', 'WhatsApp',
    'Facebook', 'WhatsApp', 'Spotify', 'Docs',
    'Google', 'Forms', 'Slides', 'Sheets',
    'Docs', 'Facebook', 'Sheets', 'Google',
    'WhatsApp', 'Spotify', 'Forms', 'Slides',
    'Slides', 'Google', 'Facebook', 'Docs',
    'Spotify', 'Forms', 'WhatsApp', 'Sheets',
  ],
  2: ['WhatsApp', 'Spotify', 'Facebook', 'Google'],
  3: ['Spotify', 'Facebook', 'Docs'],
  4: ['Docs', 'Slides', 'Sheets', 'Forms', 'Google'],
  5: ['Spotify', 'Facebook', 'WhatsApp', 'Google', 'Sheets', 'Forms', 'Slides'],
};

export const FOLDER_LABELS = [
  'App Folder-1',
  'App Folder-2',
  'App Folder-3',
  'App Folder-4',
  'App Folder-5',
];

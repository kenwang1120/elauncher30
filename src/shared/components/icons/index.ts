export { FacebookIcon } from './FacebookIcon';
export { GoogleIcon } from './GoogleIcon';
export { SpotifyIcon } from './SpotifyIcon';
export { WhatsAppIcon } from './WhatsAppIcon';
export { DocsIcon } from './DocsIcon';
export { SlidesIcon } from './SlidesIcon';
export { SheetsIcon } from './SheetsIcon';
export { FormsIcon } from './FormsIcon';

import { FacebookIcon } from './FacebookIcon';
import { GoogleIcon } from './GoogleIcon';
import { SpotifyIcon } from './SpotifyIcon';
import { WhatsAppIcon } from './WhatsAppIcon';
import { DocsIcon } from './DocsIcon';
import { SlidesIcon } from './SlidesIcon';
import { SheetsIcon } from './SheetsIcon';
import { FormsIcon } from './FormsIcon';

export const APP_ICONS: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Facebook: FacebookIcon,
  Google: GoogleIcon,
  Spotify: SpotifyIcon,
  WhatsApp: WhatsAppIcon,
  Docs: DocsIcon,
  Slides: SlidesIcon,
  Sheets: SheetsIcon,
  Forms: FormsIcon,
};

export default APP_ICONS;

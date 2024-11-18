import MainHeader from '@/components/main-header';
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A collection of my work',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

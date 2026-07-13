import React from 'react';

export const COPYRIGHT_TEXT = '© 2026.07 Sun Ah Bae. All rights reserved. | sa.bae@kaist.ac.kr';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-12 border-t border-border">
      <p className="text-center text-sm text-muted-foreground">
        {COPYRIGHT_TEXT}
      </p>
    </footer>
  );
};

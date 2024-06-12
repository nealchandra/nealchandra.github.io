import { useState } from 'react';
import GiscusReact from '@giscus/react';

const Giscus = () => {
  const [theme, setTheme] = useState(window.giscusTheme ?? 'preferred_color_scheme');
  window.addEventListener('giscus:theme', (e) => {
    console.log(e);
    setTheme(e.detail.theme);
  });

  return (
    <GiscusReact
      id="comments"
      repo="nealchandra/nealchandra.github.io"
      repoId="R_kgDOJDX8xg"
      category="Announcements"
      categoryId="DIC_kwDOJDX8xs4CYHIq"
      mapping="url"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  );
}

export default Giscus;
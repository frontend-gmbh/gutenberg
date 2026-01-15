import{r as s}from"./iframe-2TvY6Iig.js";let c=0;function t(o){const n=document.scrollingElement||document.body;o&&(c=n.scrollTop);const l=o?"add":"remove";n.classList[l]("lockscroll"),document.documentElement.classList[l]("lockscroll"),o||(n.scrollTop=c)}let e=0;function r(){return s.useEffect(()=>(e===0&&t(!0),++e,()=>{e===1&&t(!1),--e}),[]),null}try{r.displayName="ScrollLock",r.__docgenInfo={description:`ScrollLock is a content-free React component for declaratively preventing
scroll bleed from modal UI to the page body. This component applies a
\`lockscroll\` class to the \`document.documentElement\` and
\`document.scrollingElement\` elements to stop the body from scrolling. When it
is present, the lock is applied.

\`\`\`jsx
import { ScrollLock, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyScrollLock = () => {
  const [ isScrollLocked, setIsScrollLocked ] = useState( false );

  const toggleLock = () => {
    setIsScrollLocked( ( locked ) => ! locked ) );
  };

  return (
    <div>
      <Button variant="secondary" onClick={ toggleLock }>
        Toggle scroll lock
      </Button>
      { isScrollLocked && <ScrollLock /> }
      <p>
        Scroll locked:
        <strong>{ isScrollLocked ? 'Yes' : 'No' }</strong>
      </p>
    </div>
  );
};
\`\`\``,displayName:"ScrollLock",props:{}}}catch{}export{r as S};

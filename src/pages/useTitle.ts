import { useEffect } from "react";

/** Sets the document title while a page is shown. */
export function useTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}

import { useEffect } from "react";

export function usePageMetadata(metadata) {
  useEffect(() => {
    if (!metadata) return undefined;

    const previousTitle = document.title;
    const definitions = [
      { attribute: "name", key: "description", value: metadata.description },
      { attribute: "property", key: "og:type", value: "website" },
      { attribute: "property", key: "og:title", value: metadata.title },
      { attribute: "property", key: "og:description", value: metadata.description },
      { attribute: "property", key: "og:url", value: metadata.canonical },
      { attribute: "property", key: "og:image", value: metadata.image },
      { attribute: "property", key: "og:image:alt", value: metadata.imageAlt },
      { attribute: "name", key: "twitter:card", value: "summary_large_image" },
      { attribute: "name", key: "twitter:title", value: metadata.title },
      { attribute: "name", key: "twitter:description", value: metadata.description },
      { attribute: "name", key: "twitter:image", value: metadata.image },
    ];
    const previousMeta = definitions.map(({ attribute, key, value }) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      const created = !element;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      const previousValue = element.getAttribute("content");
      element.setAttribute("content", value);
      return { element, created, previousValue };
    });

    let canonical = document.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = metadata.canonical;
    document.title = metadata.title;

    return () => {
      document.title = previousTitle;
      previousMeta.forEach(({ element, created, previousValue }) => {
        if (created) element.remove();
        else if (previousValue === null) element.removeAttribute("content");
        else element.setAttribute("content", previousValue);
      });
      if (createdCanonical) canonical.remove();
      else canonical.href = previousCanonical;
    };
  }, [metadata]);
}
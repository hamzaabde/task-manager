import { createPortal } from "react-dom";
import React, { useEffect, useRef } from "react";

export default function Portal(props: React.PropsWithChildren) {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rootNode = document.querySelector("#root")?.parentElement;
    const node = document.createElement("div");

    rootNode?.appendChild(node);
    nodeRef.current = node;

    return () => {
      rootNode?.removeChild;
    };
  }, []);

  return createPortal(props.children);
}

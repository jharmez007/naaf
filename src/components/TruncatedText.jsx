import React, { useMemo } from "react";
import { PortableText } from "@portabletext/react";

const TruncatedText = ({ body, components }) => {
  // Extract and truncate text
  const truncatedText = useMemo(() => {
    if (!body) return "";

    // Convert PortableText blocks to plain text
    let plainText = body
      .map(block =>
        block.children?.map(child => child.text).join(" ")
      )
      .join(" ");

    // Split into words and truncate
    const words = plainText.split(/\s+/).slice(0, 18).join(" ");

    // Add ellipsis if there are more words
    return words + (plainText.split(/\s+/).length > 18 ? "." : "");
  }, [body]);

  return (
    <p className="p__text text-sm lg:text-base">
      <PortableText
        value={[{ _type: "block", children: [{ _type: "span", text: truncatedText }] }]}
        components={components}
      />
    </p>
  );
};

export default TruncatedText;


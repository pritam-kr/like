export const contentShort = (content) => {
  let contentSplit = content.split(" ").slice(0, 15);
  return contentSplit.join(" ") + "...";
};

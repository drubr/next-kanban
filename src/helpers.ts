export function capitalize(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formatBoardTitle(boardTitle: string) {
  return capitalize(
    boardTitle
      .trim()
      .replace("/board", "")
      .replace("/", "")
      .replaceAll("-", " "),
  );
}

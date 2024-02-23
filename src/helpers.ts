export function capitalize(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formatBoardName(boardTitle: string) {
  return capitalize(
    boardTitle
      .trim()
      .replace("/board", "")
      .replace("/", "")
      .replaceAll("-", " "),
  );
}

export function formatBoardNameAsURL(boardName: string) {
  return boardName.trim().replaceAll(" ", "-").toLowerCase();
}

export function formatTaskTitle(taskTitle: string) {
  return taskTitle.trim().replaceAll(" ", "").replaceAll("-", "").toLowerCase();
}

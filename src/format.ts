import dayjs from "dayjs";

export function formatDate(date?: Date): string {
  if(!date) {
    return "";
  }
  return dayjs(date).format("YYYY-MM-DD");
}

export function formatYear(date?: Date): string {
  if(!date) {
    return ""
  }
  return dayjs(date).format("YYYY");
}

export function formatSpanOfTime(span: string): string {
  switch(span) {
    case "morning":
        return "朝";
      case "noon":
        return "昼";
      case "evening":
        return "夜";
      case "other":
        return "その他"
      default :
        return "";
  }
}

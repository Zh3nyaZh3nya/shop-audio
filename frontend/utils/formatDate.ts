export function formatDate(dateString: string, format: "words" | "dots" = "words"): string {
    const months: readonly string[] = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const [year, month, day] = dateString.split('-').map(Number);

    if (format === "dots") {
        return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
    }

    return `${day} ${months[month - 1]} ${year} года`;
}

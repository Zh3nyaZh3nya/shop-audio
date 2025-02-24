export function formatDate(dateString: string): string {
    const months: readonly string[] = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const [year, month, day] = dateString.split('-').map(Number);
    return `${day} ${months[month - 1]} ${year} года`;
}

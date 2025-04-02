export const categoriesData: ICategory[] = [
    {
        category: 'Наушники',
        subcategories: [
            'Беспроводные',
            'Проводные',
            'Игровые',
            'Студийные',
            'Спортивные',
        ],
    },
    {
        category: 'Акустические системы',
        subcategories: [
            'Портативные колонки',
            'Саундбары',
            'Домашние кинотеатры',
            'Студийные мониторы',
            'Напольные колонки',
        ],
    },
    {
        category: 'Усилители и ресиверы',
        subcategories: [
            'Стереоусилители',
            'AV-ресиверы',
            'Ламповый звук',
            'ЦАП и предусилители',
            'Гибридные усилители',
        ],
    },
    {
        category: 'Виниловые проигрыватели',
        subcategories: [
            'Автоматические',
            'Ручные',
            'DJ-вертушки',
            'С встроенным усилителем',
            'Портативные',
        ],
    },
    {
        category: 'Микрофоны и студийное оборудование',
        subcategories: [
            'Конденсаторные микрофоны',
            'Динамические микрофоны',
            'Петличные микрофоны',
            'Звуковые карты',
            'Стойки и аксессуары',
        ],
    },
].map(({ category, subcategories }) => ({
    category,
    slug_category: slugify(transliterate(category)),
    subcategories: subcategories.map(subcategory => ({
        title: subcategory,
        slug: slugify(transliterate(subcategory)),
    })),
}));

/**
 * Функция транслитерации
 */
function transliterate(text: string): string {
    const map: Record<string, string> = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
        'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh',
        'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O',
        'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts',
        'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };
    return text.split('').map(char => map[char] || char).join('');
}

/**
 * Функция для преобразования строки в slug
 */
function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .trim();
}

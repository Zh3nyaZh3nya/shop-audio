import { computed } from "vue";
import type { ComputedRef } from "vue";

interface IStatus {
    status: statusPromo | statusProduct | statusPage;
    word: string;
    color: string;
}

export const useStatus = (
    status: statusPromo | statusProduct | statusPage,
    isReplaceStatusPage: boolean = false
): ComputedRef<IStatus> => {
    if (isReplaceStatusPage) {
        if (status === 'promo') {
            status = "PROMO";
        } else if (status === 'top') {
            status = "TOP_PRODUCT";
        } else if (status === 'novelty') {
            status = "NEW";
        }
    }

    return computed((): IStatus => {
        switch (status) {
            case "PROMO":
            case "promo":
                return {
                    status,
                    word: "Акция",
                    color: "accent",
                };
            case "TOP_PRODUCT":
            case "top":
                return {
                    status,
                    word: "Топ товаров",
                    color: "primary",
                };
            case "NEW":
            case "novelty":
                return {
                    status,
                    word: "Новинка",
                    color: "success",
                };
            case "ACTIVE":
                return {
                    status,
                    word: "Активный",
                    color: "success",
                };
            case "FINISH":
                return {
                    status,
                    word: "Завершено",
                    color: "accent",
                };
            case "PENDING":
                return {
                    status,
                    word: "Скоро начало!",
                    color: "pending",
                };
            default:
                return {
                    status,
                    word: "Неизвестный статус",
                    color: "warning",
                };
        }
    });
};

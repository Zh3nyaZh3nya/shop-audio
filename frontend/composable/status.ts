import { computed } from "vue";
import type { ComputedRef } from "vue";

interface IStatus {
    word: string
    color: string
}

export const useStatus = (status: IPromo['status']): ComputedRef<IStatus> => {
    return computed((): IStatus => {
        switch (status) {
            case "ACTIVE":
                return {
                    word: 'Активный',
                    color: 'success'
                }
            case "FINISH":
                return {
                    word: 'Завершено',
                    color: 'accent'
                }
            case "PENDING":
                return {
                    word: 'Скоро начало!',
                    color: 'pending'
                }
            default:
                return {
                    word: 'Неизвестный статус',
                    color: 'warning'
                }
        }
    })
}
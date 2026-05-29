import type { User } from "../types";
import 

export const placeOrder = () => {

}

export const cancelOrder = () => {

}

export const resetOrder = () => {
    return { "ok": true }
}

export const createUser = (userId: string, availableBalance: number) => {
    const user: User = {
        userId,
        availableBalance,
        lockedMargin:0,
        realizedPnl:0,     
    }
    return { userId: userId }
}

export const placeOrder = (userId: string, initialBalance: number) => {
    
}
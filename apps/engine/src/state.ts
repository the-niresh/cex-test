import type { User, Position, OrderBook, AdlEvent } from "./types.ts";

export const users = new Map<string, User>();
export const positions = new Map<string, Map<string, Position>>();
export const orderbook = new Map<string, OrderBook>();
export const markPrices = new Map<string, number>();
export const insuranceFund = new Map<string, number>();
export let adlEvents: AdlEvent[] = [];
export let orderIdCounter = 0;

export function nextOrderId(): string {
  orderIdCounter += 1;
  return `order-${orderIdCounter}`;
}

export function getOrCreateOrderBook(symbol: string): OrderBook {
  let book = orderbook.get(symbol);
  if (!book) {
    book = { bids: [], asks: [] };
    orderbook.set(symbol, book);
  }
  return book;
}

export function getUserPositions(userId: string): Map<string, Position> {
  let userPos = positions.get(userId);
  if (!userPos) {
    userPos = new Map();
    positions.set(userId, userPos);
  }
  return userPos;
}

export function reset(): void {
  users.clear();
  positions.clear();
  orderbook.clear();
  markPrices.clear();
  insuranceFund.clear();
  adlEvents = [];
  orderIdCounter = 0;
}

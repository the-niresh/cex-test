export type Side = "long" | "short";
export type OrderType = "limit" | "market";
export type OrderStatus =
  | "resting"
  | "filled"
  | "partially_filled"
  | "cancelled"
  | "rejected";

export interface User {
  userId: string;
  availableBalance: number;
  lockedMargin: number;
  realizedPnl: number;
}

export interface Position {
  symbol: string;
  side: Side;
  quantity: number;
  averageEntryPrice: number;
  margin: number;
  leverage: number;
}

export interface RestingOrder {
  orderId: string;
  userId: string;
  symbol: string;
  side: Side;
  price: number;
  quantity: number;
  leverage: number;
  seq: number;
}

export interface Fill {
  price: number;
  quantity: number;
  makerOrderId: string;
  makerUserId: string;
  takerUserId: string;
}

export interface AdlEvent {
  userId: string;
  symbol: string;
  reducedQuantity: number;
  bankruptcyPrice: number;
}

export interface OrderBook {
  bids: RestingOrder[];
  asks: RestingOrder[];
}

export interface MarginResult {
  locked: number;
  used: number;
  released: number;
}

export interface OrderResponse {
  orderId: string;
  status: OrderStatus;
  reason?: string;
  fills: Fill[];
  remainingQuantity: number;
  cancelledQuantity: number;
  margin: MarginResult;
}

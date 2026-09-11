export type Payment = {
  id: string;
  recruiterId: string;
  playerId?: string;
  amount: number;
  currency: string;
  type: "relation" | "subscription";
  status: "pending" | "paid" | "failed" | "refunded";
  createdAt: string;
};

export type Relation = {
  id: string;
  recruiterId: string;
  playerId: string;
  status: "followed" | "requested" | "accepted" | "rejected";
  createdAt: string;
};

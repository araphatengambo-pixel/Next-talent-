export type Notification = {
  id: string;
  recruiterId: string;
  title: string;
  message: string;
  type: "player_update" | "relation" | "payment" | "system";
  read: boolean;
  createdAt: string;
};

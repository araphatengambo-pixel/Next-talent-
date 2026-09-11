export type Recruiter = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  clubName: string;
  country: string;
  status: "pending" | "verified" | "rejected";
  createdAt: string;
};

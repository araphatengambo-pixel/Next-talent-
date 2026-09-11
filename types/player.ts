export type Player = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  position: string;
  height: number;
  weight: number;
  speed: number;
  strongFoot: "droit" | "gauche" | "deux";
  videoUrl?: string;
  photoUrl?: string;
  status: "draft" | "published" | "disabled";
};

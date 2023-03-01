import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { User } from "../@types/user.types";

export const userConverter = {
  toFirestore(user: User): DocumentData {
    return { ...user };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options);
    return {
      id: data.id,
      name: data.displayName,
      email: data.email,
      adress: data.adress,
      phone: data.phone,
      city: data.city,
      provider: data.provider,
    };
  },
};

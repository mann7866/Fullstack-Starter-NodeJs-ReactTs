import { create } from "zustand";
import type { User } from "@/features/user/types/user";
import { userService } from "@/features/user/services/user.service";

interface UserState {
  users: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
  createUser: (data: Omit<User, "id" | "created_at">) => Promise<void>;
  updateUser: (id: number, data: Partial<User>) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  loading: false,

  fetchUsers: async () => {
    set({ loading: true });
    const users = await userService.getAll();
    set({ users, loading: false });
  },

   createUser: async (data) => {
    await userService.create(data)

    // ⬇️ INI DIA TEMPATNYA
    await get().fetchUsers()
  },

  updateUser: async (id, data) => {
    const updated = await userService.update(id, data);
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? updated : u)),
    }));
  },

  deleteUser: async (id) => {
    await userService.delete(id);
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    }));
  },
}));

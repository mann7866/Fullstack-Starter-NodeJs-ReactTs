import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/features/user/store/user.store";
import UserForm from "../components/userForm";
import type { ApiErrorResponse } from "@/types/apiResponse";
import type { FieldErrors } from "@/types/form";

export default function UserCreatePage() {
  const { createUser } = useUserStore();
  const navigate = useNavigate();

  type UserFieldKeys = "name" | "email";

  const [errors, setErrors] = useState<FieldErrors<UserFieldKeys>>({});

  return (
    <div>
      <h1>Create User</h1>

      <UserForm
        errors={errors}
        onSubmit={async (data) => {
          try {
            setErrors({});
            await createUser(data);
            navigate("/users");
          } catch (err: any) {
            const backend: ApiErrorResponse = err.response?.data;

            if (backend?.errors) {
              setErrors(backend.errors);
            }
          }
        }}
      />
    </div>
  );
}

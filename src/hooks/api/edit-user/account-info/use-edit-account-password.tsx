import { useMutation } from "react-query";
import { useAuthenticatedRequest } from "../../../networking/use-authenticated-request";

interface EditAccountPasswordDTO {
  currentPassword: string;
  password: string;
}

export function useEditAccountPassword() {
  const { request } = useAuthenticatedRequest();

  return useMutation({
    mutationFn: async (data: EditAccountPasswordDTO) =>
      await request({
        url: `${import.meta.env.VITE_AUTH_HOST}/api/users/account/password`,
        method: "put",
        data,
      }),
    mutationKey: ["users", "account", "password"],
  });
}

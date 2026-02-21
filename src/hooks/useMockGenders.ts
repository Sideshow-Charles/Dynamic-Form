import { useQuery } from "@tanstack/react-query"
import type { GenderOption } from "../types"

/**
 * Mock hook — returns gender options for the dropdown.
 *
 * DO NOT MODIFY THIS FILE.
 */
export function useMockGenders() {
  return useQuery<GenderOption[]>({
    queryKey: ["mock-genders"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200))
      return [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ]
    },
  })
}

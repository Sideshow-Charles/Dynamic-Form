import { useMutation } from "@tanstack/react-query"
import type { SubmitItem, ApiResponse } from "../types"

/**
 * Mock hook — simulates posting the built payload to a server.
 * Returns a success/error response after a short delay.
 *
 * DO NOT MODIFY THIS FILE.
 */
export function useMockSubmit() {
  return useMutation<ApiResponse<{ count: number }>, Error, SubmitItem[]>({
    mutationFn: async (payload) => {
      // Simulate network latency
      await new Promise((r) => setTimeout(r, 800))

      // --- Server-side validation examples ---
      if (payload.length === 0) {
        return {
          status: "error",
          msg: "Payload is empty. Select at least one person.",
        }
      }

      const hasInvalidAge = payload.some(
        (item) => item.age < 1 || item.age > 120
      )
      if (hasInvalidAge) {
        return {
          status: "error",
          msg: "One or more people have an invalid age.",
        }
      }

      const hasInvalidEmail = payload.some(
        (item) => !item.email || !item.email.includes("@")
      )
      if (hasInvalidEmail) {
        return {
          status: "error",
          msg: "One or more people have an invalid email.",
        }
      }

      // Success
      console.log("Submitted payload:", JSON.stringify(payload, null, 2))
      return {
        status: "success",
        msg: `Successfully saved configuration for ${payload.length} person(s).`,
        data: { count: payload.length },
      }
    },
  })
}

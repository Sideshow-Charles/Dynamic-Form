import { useQuery } from "@tanstack/react-query"
import type { Person } from "../types"

/**
 * Mock hook — returns a list of people to select from.
 *
 * DO NOT MODIFY THIS FILE.
 */
export function useMockPeople() {
  return useQuery<Person[]>({
    queryKey: ["mock-people"],
    queryFn: async () => {
      // Simulate network latency
      await new Promise((r) => setTimeout(r, 500))

      return [
        { id: 1, fullName: "John Doe", department: "Engineering" },
        { id: 2, fullName: "Jane Smith", department: "Design" },
        { id: 3, fullName: "Bob Johnson", department: "Marketing" },
        { id: 4, fullName: "Alice Williams", department: "Engineering" },
        { id: 5, fullName: "Charlie Brown", department: "Finance" },
        { id: 6, fullName: "Diana Prince", department: "HR" },
        { id: 7, fullName: "Edward Norton", department: "Engineering" },
        { id: 8, fullName: "Fiona Apple", department: "Design" },
      ]
    },
  })
}

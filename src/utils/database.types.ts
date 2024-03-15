export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      calvary_products: {
        Row: {
          categories: string[] | null
          countries: string[] | null
          created_at: string
          description: string | null
          id: number
          image: string | null
          is_exist: boolean | null
          logo: string | null
          name: string | null
          title: string | null
        }
        Insert: {
          categories?: string[] | null
          countries?: string[] | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          is_exist?: boolean | null
          logo?: string | null
          name?: string | null
          title?: string | null
        }
        Update: {
          categories?: string[] | null
          countries?: string[] | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          is_exist?: boolean | null
          logo?: string | null
          name?: string | null
          title?: string | null
        }
        Relationships: []
      }
      calvary_projects: {
        Row: {
          completion: string
          country: string | null
          created_at: string
          description: string | null
          id: number
          image_path: string | null
          location: string
          name: string
          products: string[] | null
          sectors: string[] | null
          services: string[] | null
          size: string | null
          tags: string[] | null
          year: number | null
        }
        Insert: {
          completion: string
          country?: string | null
          created_at?: string
          description?: string | null
          id?: number
          image_path?: string | null
          location: string
          name?: string
          products?: string[] | null
          sectors?: string[] | null
          services?: string[] | null
          size?: string | null
          tags?: string[] | null
          year?: number | null
        }
        Update: {
          completion?: string
          country?: string | null
          created_at?: string
          description?: string | null
          id?: number
          image_path?: string | null
          location?: string
          name?: string
          products?: string[] | null
          sectors?: string[] | null
          services?: string[] | null
          size?: string | null
          tags?: string[] | null
          year?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      distinct_products: {
        Row: {
          distinct_values: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

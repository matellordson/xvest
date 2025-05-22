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
      "spacex portfolio": {
        Row: {
          balance: number
          created_at: string
          id: string
          shares: number | null
        }
        Insert: {
          balance?: number
          created_at?: string
          id: string
          shares?: number | null
        }
        Update: {
          balance?: number
          created_at?: string
          id?: string
          shares?: number | null
        }
        Relationships: []
      }
      tesla: {
        Row: {
          model: string
          plan1: number
          plan2: number
          plan3: number
          plan4: number
          plan5: number
          price: number
          slug: string
          type: string
        }
        Insert: {
          model: string
          plan1: number
          plan2: number
          plan3: number
          plan4: number
          plan5: number
          price: number
          slug: string
          type: string
        }
        Update: {
          model?: string
          plan1?: number
          plan2?: number
          plan3?: number
          plan4?: number
          plan5?: number
          price?: number
          slug?: string
          type?: string
        }
        Relationships: []
      }
      "tesla favorite": {
        Row: {
          color: string | null
          created_at: string
          id: string
          interior: string | null
          is_favorite: boolean
          model: string
          plan: number
          price: number
          seat: string | null
          self_drive: string | null
          steering: string | null
          user: string
          wheels: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string
          id?: string
          interior?: string | null
          is_favorite?: boolean
          model: string
          plan: number
          price: number
          seat?: string | null
          self_drive?: string | null
          steering?: string | null
          user: string
          wheels?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string
          id?: string
          interior?: string | null
          is_favorite?: boolean
          model?: string
          plan?: number
          price?: number
          seat?: string | null
          self_drive?: string | null
          steering?: string | null
          user?: string
          wheels?: string | null
        }
        Relationships: []
      }
      "tesla order": {
        Row: {
          balance: number
          color: string | null
          created_at: string
          id: string
          interior: string | null
          is_complete: boolean
          is_remaining: boolean
          model: string
          paid: number
          plan: number
          price: number
          seat: string | null
          self_drive: string | null
          steering: string | null
          user: string
          wheels: string
        }
        Insert: {
          balance?: number
          color?: string | null
          created_at?: string
          id?: string
          interior?: string | null
          is_complete?: boolean
          is_remaining?: boolean
          model: string
          paid?: number
          plan: number
          price: number
          seat?: string | null
          self_drive?: string | null
          steering?: string | null
          user: string
          wheels: string
        }
        Update: {
          balance?: number
          color?: string | null
          created_at?: string
          id?: string
          interior?: string | null
          is_complete?: boolean
          is_remaining?: boolean
          model?: string
          paid?: number
          plan?: number
          price?: number
          seat?: string | null
          self_drive?: string | null
          steering?: string | null
          user?: string
          wheels?: string
        }
        Relationships: []
      }
      "user profile": {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: number
          is_admin: boolean
          last_name: string
          number: string
          user: string
          zip: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: number
          is_admin?: boolean
          last_name: string
          number: string
          user: string
          zip: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: number
          is_admin?: boolean
          last_name?: string
          number?: string
          user?: string
          zip?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

<script lang="ts">
  import { HighlightAuto } from '$lib';
  const code = `export type UserRole = 'admin' | 'editor' | 'viewer';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: number;
  tags?: string[];
}

export type ApiResponse<T> = {
  data: T;
  success: boolean;
  error?: string;
};

export type Nullable<T> = T | null;
`;
</script>

<HighlightAuto {code} />
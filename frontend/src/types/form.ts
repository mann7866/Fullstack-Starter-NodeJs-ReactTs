export type FieldErrors<T extends string = string> = {
  [K in T]?: string
}

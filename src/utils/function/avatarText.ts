export function GetAvatarText(name: string | undefined) {
  return name ? name.charAt(0).toUpperCase() : "";
}

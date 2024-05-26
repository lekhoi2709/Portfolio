import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function MyAvatar() {
  return (
    <Avatar className="w-24 h-24 border-2 border-white">
      <AvatarImage src="/avatar.jpg" alt="Avatar" />
      <AvatarFallback>LDK</AvatarFallback>
    </Avatar>
  );
}

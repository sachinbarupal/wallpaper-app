import PictureModal from "@/components/PictureModal";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Explore() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Button title="Open Image Modal" onPress={() => setIsOpen(true)}></Button>

      {isOpen && <PictureModal onClose={() => setIsOpen(false)} />}
    </View>
  );
}

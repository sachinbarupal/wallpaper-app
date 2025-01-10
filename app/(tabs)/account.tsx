import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  return (
    <SafeAreaView>
      <Text>Account Page</Text>

      <Link href="/(stack)/account_info">
        <Text>Account Information</Text>
      </Link>
    </SafeAreaView>
  );
}

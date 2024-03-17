import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const lessons = [
  { id: 1, title: "First lesson" },
  { id: 2, title: "Second lesson" },
  { id: 3, title: "Third lesson" },
  { id: 4, title: "Fourth lesson" },
  { id: 5, title: "Fifth lesson" },
  { id: 6, title: "Sixth lesson" },
  { id: 7, title: "Seventh lesson" },
  { id: 8, title: "Eighth lesson" },
  { id: 9, title: "Ninth lesson" },
  { id: 10, title: "Tenth lesson" },
];

interface LinkItemProps {
  href: string;
  title: string;
}

function LinkItem({ href, title }: LinkItemProps) {
  return (
    <Link style={styles.listItem} href={href}>
      {title}
    </Link>
  );
}

export default function Page() {
  return (
    <View>
      <Text style={styles.title}>Home page</Text>
      {lessons.map((lesson) => (
        <LinkItem
          key={lesson.id}
          href={`/lessons/${lesson.id}`}
          title={lesson.title}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Arial",
    marginBottom: 20,
  },
  listItem: {
    marginBottom: 10,
    fontSize: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});

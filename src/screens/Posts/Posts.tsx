import React, { FC, useEffect, useState } from "react";
import { View, Text } from "react-native";

export const Posts: FC = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const postsResp = await resp.json();
      if (!!postsResp) {
        setPosts(postsResp);
      }
    };
    fetchPosts();
  }, []);

  console.log("GG POSTS", posts);
  return (
    <View>
      <Text>My yext</Text>
    </View>
  );
};

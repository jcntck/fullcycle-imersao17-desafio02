import Pagination from "@/components/Pagination";
import { Post, PostService } from "@/services/posts.service";
import { Box, Container, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import Link from "next/link";

async function getPosts(page: number): Promise<Post[]> {
  const postsService = new PostService();
  return postsService.getPosts({ page, size: 10 });
}

export default async function PostsPage({ searchParams }: { searchParams: { page: number } }) {
  const posts = await getPosts(searchParams.page);

  return (
    <Container maxWidth="sm" component={"main"} sx={{ my: 3 }}>
      <Typography
        variant="h4"
        sx={{
          letterSpacing: ".01rem",
          my: 2,
        }}
      >
        POSTS
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <List>
        {posts.map((post, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              LinkComponent={Link}
              href={`/posts/${post.id}?previous=/posts${searchParams.page ? `?page=${searchParams.page}` : ""}`}
              divider
            >
              <ListItemText primary={post.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
        <Pagination count={posts.length} page={searchParams.page} path="/posts" />
      </Box>
    </Container>
  );
}

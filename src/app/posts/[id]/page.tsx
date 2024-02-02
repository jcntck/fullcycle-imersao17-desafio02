import { PostService } from "@/services/posts.service";
import { UsersService } from "@/services/users.service";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Link from "next/link";

type PostDetails = {
  id: number;
  title: string;
  body: string;
  user: {
    id: number;
    username: string;
    name: string;
  };
};

async function getPostDetail(id: number): Promise<PostDetails> {
  const postsService = new PostService();
  const usersService = new UsersService();

  const post = await postsService.getPostById(id);
  const user = await usersService.getUserById(post.userId);

  return {
    id: post.id,
    title: post.title,
    body: post.body,
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
    },
  } as PostDetails;
}

export default async function PostDetailPage({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { previous: string };
}) {
  const postDetail = await getPostDetail(params.id);

  return (
    <Container maxWidth="sm" component={"main"} sx={{ my: 3 }}>
      <Box
        sx={{
          boxShadow: 1,
          border: 1,
          borderColor: "grey.800",
          borderRadius: 1,
          p: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            letterSpacing: ".01rem",
            my: 2,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {postDetail.title}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            p: 1,
          }}
          gutterBottom
        >
          {postDetail.body}
        </Typography>
        <Typography variant="overline" display="block" textAlign="right" gutterBottom>
          Escrito por {postDetail.user.username}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", my: 1 }}>
        <Button startIcon={<ArrowBack />} LinkComponent={Link} href={searchParams.previous}>
          Voltar
        </Button>
      </Box>
    </Container>
  );
}

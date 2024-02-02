import { Box, PaginationItem } from "@mui/material";
import Link from "next/link";

export default function Pagination({ page, count, path }: { page: number; count: number; path: string }) {
  return (
    <Box>
      <PaginationItem type="previous" disabled={page == 1} component={Link} href={`${path}?page=${page - 1}`} />
      {Array.from(new Array(count)).map((_, index) => (
        <PaginationItem
          key={index}
          page={index + 1}
          selected={index + 1 == page}
          component={Link}
          href={`${path}?page=${index + 1}`}
        />
      ))}
      <PaginationItem type="next" disabled={page == count} component={Link} href={`${path}?page=${+page + 1}`} />
    </Box>
  );
}

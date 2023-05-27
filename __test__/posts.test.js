import { render, screen } from "@testing-library/react";
import Posts from "../components/Posts";

const posts = [
  {
    meta: {
      author: "Danil Ishutin",
      title:
        "Font Size Idea: px at Root, rem for Components, em for Text Elements",
      url: "css-tricks.com",
    },
    category: "ux_ui",
    comments: 7,
    created_at: 1459857600,
    upvotes: 9,
  },
  {
    meta: {
      author: "Christopher Alesund",
      title: "Case study: Redesigning the Folyo landing page",
      url: "medium.com",
    },
    category: "case_study",
    comments: 0,
    created_at: 1460289600,
    upvotes: 2,
  },
  {
    meta: {
      author: "Olof Kajbjer",
      title: "Want people to use your product? Use it yourself",
      url: "medium.com",
    },
    category: "product_design",
    comments: 4,
    created_at: 1460030400,
    upvotes: 11,
  },
  {
    meta: {
      author: "Mikael Greif",
      title: "What do you do with a failed project?",
      url: "mika.el",
    },
    category: "discussion",
    comments: 2,
    created_at: 1460203200,
    upvotes: 4,
  },
  {
    meta: {
      author: "Kenny Schrub",
      title: "Some things can't be prototyped",
      url: "mika.el",
    },
    category: "discussion",
    comments: 25,
    created_at: 1460203200,
    isOwner: true,
    upvotes: 4,
  },
  {
    meta: {
      author: "Pasha Biceps",
      title: "Don't let bad process or structure kill great interfaces",
      url: "medium.com",
    },
    category: "product_design",
    comments: 0,
    created_at: 1460376000,
    isOwner: true,
    upvotes: 2,
  },
  {
    meta: {
      author: "Jacky Mao",
      title: "How to prototype without any tools",
      url: "jackymao.wix",
    },
    category: "product_design",
    comments: 0,
    upvotes: 1,
  },
];

describe("Posts", () => {
  it("renders 'not found' message", () => {
    render(<Posts filteredPosts={[]} loading={false} />);

    expect(screen.getByText(/no posts found\.\.\./i)).toBeInTheDocument();
  });

  it("renders 'loading' message without posts", () => {
    render(<Posts filteredPosts={[]} loading={true} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders 'loading' message with posts", () => {
    render(<Posts filteredPosts={posts} loading={true} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders some elements of each post", () => {
    render(<Posts filteredPosts={posts} loading={false} />);

    expect(
      screen.getByText(
        /font size idea: px at root, rem for components, em for text elements/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText(/25 comments/i)).toBeInTheDocument();

    expect(screen.getByText(/load more/i)).toBeInTheDocument();

    expect(screen.getByText(/mikael greif/i)).toBeInTheDocument();
  });

  it("renders sort option", () => {
    render(<Posts filteredPosts={posts} loading={false} />);

    expect(
      screen.getByRole("button", { name: /sort/i })
    ).toBeInTheDocument();
  });
});

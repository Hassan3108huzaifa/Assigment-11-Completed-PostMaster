import { NextResponse } from 'next/server';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  };
}

export async function GET() {
  try {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await postsResponse.json();

    const usersResponse = await fetch('https://randomuser.me/api/?results=100');
    const usersData = await usersResponse.json();
    const users: RandomUser[] = usersData.results;

    const enrichedPosts = posts.map((post, index) => {
      const user = users[index % users.length];
      return {
        ...post,
        author: `${user.name.first} ${user.name.last}`,
        email: user.email,
        avatar: user.picture.medium,
        image: `https://picsum.photos/seed/${post.id}/400/300`
      };
    });

    return NextResponse.json(enrichedPosts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}


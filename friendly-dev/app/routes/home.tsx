import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Friendly Dev' },
    { name: 'description', content: 'Custom website development.' },
  ];
}

export default function Home() {
  return <>My App</>;
}

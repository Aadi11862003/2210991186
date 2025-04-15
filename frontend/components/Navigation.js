import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-dark-card border-b border-gray-700/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link href="/" className="flex items-center px-3 py-2 text-gray-300 hover:text-accent transition-colors">
              Feed
            </Link>
            <Link href="/top-users" className="flex items-center px-3 py-2 text-gray-300 hover:text-accent transition-colors">
              Top Users
            </Link>
            <Link href="/trending" className="flex items-center px-3 py-2 text-gray-300 hover:text-accent transition-colors">
              Trending
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

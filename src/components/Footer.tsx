import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">PostMaster</h2>
            <p className="text-gray-400">Discover a world of content with our premium post aggregator.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-purple-400">Home</Link></li>
              <li><Link href="/fetch-posts" className="text-gray-400 hover:text-purple-400">Posts</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-purple-400">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/profile.php?id=100067756576220" target='_blank' className="text-gray-400 hover:text-purple-400">Facebook</a></li>
              <li><a href="https://x.com/huzaifaBhai3108" target='_blank' className="text-gray-400 hover:text-purple-400">Twitter</a></li>
              <li><a href="https://www.instagram.com/mr.hassanbhai/" target='_blank' className="text-gray-400 hover:text-purple-400">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/hassanrj" target='_blank' className="text-gray-400 hover:text-purple-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PostMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

